import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function PromoSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="rounded-lg overflow-hidden bg-muted/50 aspect-[4/3] relative">
            <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/60 to-transparent text-white">
              <h3 className="text-2xl font-bold mb-2">Summer Collection</h3>
              <p className="mb-4 max-w-md">
                Lightweight essentials perfect for warmer days.
              </p>
              <Button
                asChild
                variant="outline"
                className="w-fit bg-white text-black hover:bg-white/90 hover:text-black"
              >
                <Link href="/collections/summer">Shop Collection</Link>
              </Button>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden bg-muted/50 aspect-[4/3] relative">
            <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/60 to-transparent text-white">
              <h3 className="text-2xl font-bold mb-2">Accessories</h3>
              <p className="mb-4 max-w-md">
                Complete your look with our premium accessories.
              </p>
              <Button
                asChild
                variant="outline"
                className="w-fit bg-white text-black hover:bg-white/90 hover:text-black"
              >
                <Link href="/categories/accessories">Shop Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
