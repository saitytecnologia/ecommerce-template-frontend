import { BestSellersSection } from './_components/best-sellers-section'
import { CategoriesSection } from './_components/categories-section'
import { HeroBanner } from './_components/hero-banner'
import { NewArrivalsSection } from './_components/new-arrivals-section'
import { Newsletter } from './_components/newsletter'
import { PromoSection } from './_components/promo-section'

export default function ShopPage() {
  return (
    <>
      <main className="flex-1">
        <HeroBanner />
        <CategoriesSection />
        <PromoSection />
        <BestSellersSection />
        <NewArrivalsSection />
        <Newsletter />
      </main>
    </>
  )
}
