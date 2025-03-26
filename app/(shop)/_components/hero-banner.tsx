import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HeroBanner() {
  return (
    <section className="relative bg-muted py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Minimalist Design.
                <br />
                Maximum Impact.
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Discover our curated collection of premium essentials designed
                for modern living.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href="/products">Shop Now</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/collections">Explore Collections</Link>
              </Button>
            </div>
          </div>
          <div className="bg-muted/50 aspect-square rounded-lg overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-background/50 via-muted/20 to-background/50" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-3/4 h-3/4 bg-muted rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
