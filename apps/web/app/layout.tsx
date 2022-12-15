import { Inter } from "@next/font/google";

import "tailwindcss/tailwind.css";

import { cn } from "@lib/utils";
import { Help } from "@components/Help";
import { TailwindIndicator } from "@components/tailwind-indicator";
import { Analytics } from "@components/analytics";

const fontSans = Inter({
  variable: "--font-inter",
});

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={cn(
        "bg-white font-sans text-slate-900 antialiased",
        fontSans.variable
      )}
    >
      <head />
      <body className="min-h-screen">
        {children}
        <Help />
        <TailwindIndicator />
        <Analytics />
      </body>
    </html>
  );
}
