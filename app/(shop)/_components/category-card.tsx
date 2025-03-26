import Image from "next/image"
import Link from "next/link"

interface CategoryCardProps {
  title: string
  image: string
  href: string
}

export function CategoryCard({ title, image, href }: CategoryCardProps) {
  return (
    <Link href={href} className="group block overflow-hidden rounded-lg">
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-xl font-medium text-white">{title}</h3>
        </div>
      </div>
    </Link>
  )
}

