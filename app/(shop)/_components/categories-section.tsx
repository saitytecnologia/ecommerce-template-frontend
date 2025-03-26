import { CategoryCard } from "./category-card";

export const CategoriesSection = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Featured Categories
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Explore our curated selection of premium products
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
          <CategoryCard
            title="Apparel"
            image="/placeholder.svg?height=300&width=300"
            href="/categories/apparel"
          />
          <CategoryCard
            title="Accessories"
            image="/placeholder.svg?height=300&width=300"
            href="/categories/accessories"
          />
          <CategoryCard
            title="Footwear"
            image="/placeholder.svg?height=300&width=300"
            href="/categories/footwear"
          />
          <CategoryCard
            title="Home"
            image="/placeholder.svg?height=300&width=300"
            href="/categories/home"
          />
        </div>
      </div>
    </section>
  );
};
