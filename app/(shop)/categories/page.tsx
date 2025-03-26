import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

export default function CategoriesPage() {
  const categories = [
    {
      id: 'apparel',
      title: 'Apparel',
      description: 'Minimalist clothing essentials for everyday wear',
      image: '/placeholder.svg?height=600&width=800',
      featured: true,
      productCount: 24,
    },
    {
      id: 'accessories',
      title: 'Accessories',
      description: 'Timeless accessories to complete your look',
      image: '/placeholder.svg?height=600&width=800',
      featured: false,
      productCount: 18,
    },
    {
      id: 'footwear',
      title: 'Footwear',
      description: 'Comfortable and stylish footwear for all occasions',
      image: '/placeholder.svg?height=600&width=800',
      featured: false,
      productCount: 12,
    },
    {
      id: 'home',
      title: 'Home',
      description: 'Minimalist home goods for modern living',
      image: '/placeholder.svg?height=600&width=800',
      featured: false,
      productCount: 16,
    },
    {
      id: 'tech',
      title: 'Tech Accessories',
      description: 'Sleek accessories for your devices',
      image: '/placeholder.svg?height=600&width=800',
      featured: false,
      productCount: 9,
    },
    {
      id: 'beauty',
      title: 'Beauty & Wellness',
      description: 'Clean beauty and wellness essentials',
      image: '/placeholder.svg?height=600&width=800',
      featured: false,
      productCount: 14,
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="py-12 md:py-16 lg:py-20 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Shop by Category
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Explore our curated selection of premium products by category
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4 md:px-6">
            {/* Featured Category */}
            {categories
              .filter((cat) => cat.featured)
              .map((category) => (
                <div key={category.id} className="mb-16">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                      <Image
                        src={category.image || '/placeholder.svg'}
                        alt={category.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="space-y-4">
                      <h2 className="text-3xl font-bold">{category.title}</h2>
                      <p className="text-muted-foreground text-lg">
                        {category.description}
                      </p>
                      <p className="text-sm">
                        {category.productCount} products
                      </p>
                      <Button asChild size="lg">
                        <Link href={`/products?category=${category.id}`}>
                          Shop {category.title}
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}

            {/* Other Categories Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories
                .filter((cat) => !cat.featured)
                .map((category) => (
                  <Link
                    key={category.id}
                    href={`/products?category=${category.id}`}
                    className="group block overflow-hidden rounded-lg border bg-background transition-all hover:shadow-md"
                  >
                    <div className="relative aspect-[3/2] overflow-hidden">
                      <Image
                        src={category.image || '/placeholder.svg'}
                        alt={category.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="text-xl font-medium text-white">
                          {category.title}
                        </h3>
                        <p className="text-sm text-white/80">
                          {category.productCount} products
                        </p>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-muted-foreground">
                        {category.description}
                      </p>
                      <p className="mt-2 font-medium underline underline-offset-4 group-hover:text-primary transition-colors">
                        Shop Collection
                      </p>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
