import Link from "next/link"

import { marketingConfig } from "@config/marketing"
import { siteConfig } from "@config/site"
import { cn } from "@lib/utils"
import { MainNav } from "@components/main-nav"
import { buttonVariants } from "./ui/button"

export const MarketingHeader = () => {
  return (
    <header className="container sticky top-0 z-40 bg-white">
      <div className="flex h-16 items-center justify-between border-b border-b-slate-200 py-4">
        <MainNav items={marketingConfig.mainNav} />
        <nav className="flex gap-2">
          <Link
            href="/login"
            className={cn(buttonVariants({ variant: "yellow", size: "sm" }))}
          >
            Login
          </Link>
          <Link
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className={cn(buttonVariants({ variant: "black", size: "sm" }))}
          >
            Github
          </Link>
        </nav>
      </div>
    </header>
  )
}
