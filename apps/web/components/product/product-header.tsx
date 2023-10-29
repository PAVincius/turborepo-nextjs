import Link from "next/link"
import getCategories from "@/actions/get-categories"

import { buttonVariants, cn } from "@shared/ui"
import { ProductNav } from "@/components/product/product-nav"
import NavbarActions from "@/components/product/product-navbar-actions"

export const ProductHeader: React.FC = async () => {
  const categories = await getCategories()

  return (
    <header className="container z-40 bg-background">
      <div className="flex h-20 items-center justify-between gap-x-4 border-b py-6">
        <ProductNav data={categories} />
        <NavbarActions />
        <nav className="flex gap-2">
          <Link
            href="/dashboard"
            className={cn(buttonVariants({ variant: "brand", size: "sm" }))}
          >
            Go to Dashboard
          </Link>
        </nav>
      </div>
    </header>
  )
}
