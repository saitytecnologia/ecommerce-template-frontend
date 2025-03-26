import { ProductCard } from '../products/_components/product-card'

export const NewArrivalsSection = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              New Arrivals
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              The latest additions to our collection
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
          <ProductCard
            id="5"
            name="Minimalist Backpack"
            price={89.99}
            image="/placeholder.svg?height=400&width=300"
            category="Accessories"
          />
          <ProductCard
            id="6"
            name="Slim Fit Jeans"
            price={79.99}
            image="/placeholder.svg?height=400&width=300"
            category="Apparel"
          />
          <ProductCard
            id="7"
            name="Canvas Sneakers"
            price={69.99}
            image="/placeholder.svg?height=400&width=300"
            category="Footwear"
          />
          <ProductCard
            id="8"
            name="Ceramic Mug Set"
            price={39.99}
            image="/placeholder.svg?height=400&width=300"
            category="Home"
          />
        </div>
      </div>
    </section>
  )
}
