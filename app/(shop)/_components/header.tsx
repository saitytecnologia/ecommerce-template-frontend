import { Logo } from "@/app/_components/logo";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { ShoppingCart } from "./shopping-cart";

export const Header = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container mx-auto px-4 md:px-6 flex h-16 items-center justify-between">
        <Sheet>
          <SheetTrigger>
            <Menu />
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>
                <Logo />
              </SheetTitle>
              <SheetDescription></SheetDescription>
            </SheetHeader>
            <nav className="flex flex-col gap-2">
              <Link
                href="/products"
                className="text-sm font-medium transition-colors hover:text-primary hover:bg-secondary py-2 px-4 rounded-md"
              >
                All Products
              </Link>
              <Link
                href="/categories"
                className="text-sm font-medium transition-colors hover:text-primary hover:bg-secondary py-2 px-4 rounded-md"
              >
                Categories
              </Link>
              <Link
                href="/collections"
                className="text-sm font-medium transition-colors hover:text-primary hover:bg-secondary py-2 px-4 rounded-md"
              >
                Collections
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium transition-colors hover:text-primary hover:bg-secondary py-2 px-4 rounded-md"
              >
                About
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex items-center gap-6 md:gap-10">
          <Logo />
        </div>
        <ShoppingCart />
      </div>
    </header>
  );
};
