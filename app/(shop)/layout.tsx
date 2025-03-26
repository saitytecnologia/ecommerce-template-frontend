import { PropsWithChildren } from 'react'
import { Footer } from './_components/footer'
import { Header } from './_components/header'

export default function ShopLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
