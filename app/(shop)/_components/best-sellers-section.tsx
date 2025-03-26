import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ProductCard } from "../products/_components/product-card";

export const BestSellersSection = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Best Sellers
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Our most popular products based on sales
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
          <ProductCard
            id="1"
            name="Minimal Tee"
            price={29.99}
            image="/placeholder.svg?height=400&width=300"
            category="Apparel"
          />
          <ProductCard
            id="2"
            name="Essential Hoodie"
            price={59.99}
            image="/placeholder.svg?height=400&width=300"
            category="Apparel"
          />
          <ProductCard
            id="3"
            name="Classic Watch"
            price={129.99}
            image="/placeholder.svg?height=400&width=300"
            category="Accessories"
          />
          <ProductCard
            id="4"
            name="Leather Wallet"
            price={49.99}
            image="/placeholder.svg?height=400&width=300"
            category="Accessories"
          />
        </div>
        <div className="flex justify-center mt-10">
          <Button asChild size="lg">
            <Link href="/products">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
