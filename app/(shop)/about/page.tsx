import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

export default function AboutPage() {
  const teamMembers = [
    {
      name: 'Alex Johnson',
      role: 'Founder & Creative Director',
      image: '/placeholder.svg?height=400&width=400',
      bio: 'Alex founded MONO with a vision to create timeless essentials for the modern individual.',
    },
    {
      name: 'Sam Taylor',
      role: 'Head of Design',
      image: '/placeholder.svg?height=400&width=400',
      bio: 'Sam brings over 15 years of design experience to create our minimalist aesthetic.',
    },
    {
      name: 'Jordan Lee',
      role: 'Sustainability Lead',
      image: '/placeholder.svg?height=400&width=400',
      bio: 'Jordan ensures all our products meet the highest standards of sustainability.',
    },
    {
      name: 'Morgan Chen',
      role: 'Operations Director',
      image: '/placeholder.svg?height=400&width=400',
      bio: 'Morgan oversees our ethical supply chain and production processes.',
    },
  ]

  const values = [
    {
      title: 'Quality',
      description:
        'We believe in creating products that stand the test of time, both in design and durability.',
    },
    {
      title: 'Sustainability',
      description:
        'Our commitment to the planet drives every decision we make, from materials to manufacturing.',
    },
    {
      title: 'Transparency',
      description:
        "We're open about our processes, pricing, and the people who make our products.",
    },
    {
      title: 'Simplicity',
      description:
        'We embrace minimalism in our designs, focusing on what truly matters.',
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Our Story
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Creating timeless essentials for modern living
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Story */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=800&width=800"
                alt="Our studio"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Founded on Principles</h2>
              <p className="text-muted-foreground">
                MONO was founded in 2018 with a simple mission: to create
                high-quality, timeless essentials that stand the test of time.
                We believe in the power of simplicity and the beauty of
                minimalism.
              </p>
              <p className="text-muted-foreground">
                Our journey began in a small studio with just three people and a
                vision. Today, we&apos;ve grown into a team of passionate
                individuals dedicated to crafting products that enhance your
                everyday life without unnecessary complexity.
              </p>
              <p className="text-muted-foreground">
                We design for longevity, not trends. Each product is
                thoughtfully created to be functional, beautiful, and durable.
                We&apos;re committed to responsible production practices and
                transparent business operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 md:py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">
                Our Values
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground">
                The principles that guide everything we do
              </p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="space-y-2">
                <h3 className="text-xl font-bold">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      {/* Team */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Our Team</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground">
                Meet the people behind MONO
              </p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="space-y-3">
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <Image
                    src={member.image || '/placeholder.svg'}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-12 md:py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">
                Our Commitment to Sustainability
              </h2>
              <p className="text-muted-foreground">
                Sustainability isn&apos;t just a buzzword for us—it&apos;s at
                the core of everything we do. We&apos;re committed to reducing
                our environmental impact through thoughtful material selection,
                ethical manufacturing, and responsible business practices.
              </p>
              <p className="text-muted-foreground">
                We use organic and recycled materials whenever possible, work
                with factories that prioritize worker welfare, and design
                products to last for years, not seasons.
              </p>
              <Button asChild>
                <Link href="/sustainability">
                  Learn More About Our Practices
                </Link>
              </Button>
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=800&width=800"
                alt="Sustainability"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground">
                We&apos;d love to hear from you. For any questions or inquiries,
                please contact us.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-4">
              <Button asChild size="lg" className="w-full">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <p className="text-center text-sm text-muted-foreground">
                Email: hello@mono-store.com
                <br />
                Phone: +1 (555) 123-4567
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
