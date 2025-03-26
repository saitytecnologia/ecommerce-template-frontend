import { Logo } from "@/app/_components/logo";
import { ShoppingCart } from "./shopping-cart";
import { Sidebar } from "./sidebar";

export const Header = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container mx-auto px-4 md:px-6 flex h-16 items-center justify-between">
        <Sidebar />
        <div className="flex items-center gap-6 md:gap-10">
          <Logo />
        </div>
        <ShoppingCart />
      </div>
    </header>
  );
};
