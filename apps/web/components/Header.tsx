import { marketingConfig } from "@config/marketing";
import { MainNav } from "@components/MainNav";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="container sticky top-0 z-40 bg-white">
      <div className="flex h-16 items-center justify-between border-b border-b-slate-200 py-4">
        <MainNav items={marketingConfig.mainNav} />
        <nav>
          <Link
            href="/login"
            className="relative inline-flex h-8 bg-yellow-400 border border-transparent rounded-md px-6 py-1 text-sm text-slate-800 font-semibold hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2"
          >
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
};
