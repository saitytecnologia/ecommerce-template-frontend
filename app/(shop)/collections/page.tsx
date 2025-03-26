import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

export default function CollectionsPage() {
  const collections = [
    {
      id: 'summer',
      title: 'Summer Essentials',
      description: 'Lightweight pieces perfect for warmer days',
      image: '/placeholder.svg?height=800&width=1200',
      secondaryImage: '/placeholder.svg?height=600&width=800',
      featured: true,
      productCount: 16,
    },
    {
      id: 'minimal',
      title: 'Minimalist Capsule',
      description: 'Timeless essentials for a versatile wardrobe',
      image: '/placeholder.svg?height=600&width=800',
      secondaryImage: '/placeholder.svg?height=600&width=800',
      featured: false,
      productCount: 12,
    },
    {
      id: 'monochrome',
      title: 'Monochrome Edit',
      description: 'Black and white pieces for a sleek, cohesive look',
      image: '/placeholder.svg?height=600&width=800',
      secondaryImage: '/placeholder.svg?height=600&width=800',
      featured: false,
      productCount: 9,
    },
    {
      id: 'sustainable',
      title: 'Sustainable Collection',
      description: 'Eco-friendly products made from sustainable materials',
      image: '/placeholder.svg?height=600&width=800',
      secondaryImage: '/placeholder.svg?height=600&width=800',
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
                  Collections
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Curated collections designed for modern living
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Collection */}
        {collections
          .filter((col) => col.featured)
          .map((collection) => (
            <section key={collection.id} className="py-12 md:py-16 lg:py-20">
              <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-4">
                    <h2 className="text-3xl font-bold">{collection.title}</h2>
                    <p className="text-muted-foreground text-lg">
                      {collection.description}
                    </p>
                    <p className="text-sm">
                      {collection.productCount} products
                    </p>
                    <Button asChild size="lg">
                      <Link href={`/products?collection=${collection.id}`}>
                        Shop Collection
                      </Link>
                    </Button>
                  </div>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                    <Image
                      src={collection.image || '/placeholder.svg'}
                      alt={collection.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </section>
          ))}

        <Separator />

        {/* Other Collections */}
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl font-bold mb-8">More Collections</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {collections
                .filter((col) => !col.featured)
                .map((collection) => (
                  <div
                    key={collection.id}
                    className="group relative overflow-hidden rounded-lg border bg-background transition-all hover:shadow-md"
                  >
                    <Link
                      href={`/products?collection=${collection.id}`}
                      className="absolute inset-0 z-10"
                    >
                      <span className="sr-only">View {collection.title}</span>
                    </Link>
                    <div className="relative aspect-[3/2] overflow-hidden">
                      <Image
                        src={collection.image || '/placeholder.svg'}
                        alt={collection.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium text-lg">
                        {collection.title}
                      </h3>
                      <p className="text-muted-foreground mt-1">
                        {collection.description}
                      </p>
                      <div className="mt-4 flex justify-between items-center">
                        <p className="text-sm">
                          {collection.productCount} products
                        </p>
                        <p className="font-medium underline underline-offset-4 group-hover:text-primary transition-colors">
                          Shop Now
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>

        {/* Lookbook Section */}
        <section className="py-12 md:py-16 lg:py-20 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">
                  Lookbook
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground">
                  Get inspired by our latest styling ideas
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="aspect-square relative overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  alt="Lookbook image 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="aspect-square relative overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  alt="Lookbook image 2"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="aspect-square relative overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  alt="Lookbook image 3"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="aspect-square relative overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  alt="Lookbook image 4"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="mt-8 text-center">
              <Button asChild variant="outline" size="lg">
                <Link href="/lookbook">View Full Lookbook</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
