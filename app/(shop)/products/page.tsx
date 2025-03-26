"use client";

import { Filter } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ProductCard } from "./_components/product-card";

export default function ProductsPage() {
  const [sortBy, setSortBy] = useState("featured");

  // This would typically come from an API
  const products = [
    {
      id: "1",
      name: "Minimal Tee",
      price: 29.99,
      image: "/placeholder.svg?height=400&width=300",
      category: "Apparel",
    },
    {
      id: "2",
      name: "Essential Hoodie",
      price: 59.99,
      image: "/placeholder.svg?height=400&width=300",
      category: "Apparel",
    },
    {
      id: "3",
      name: "Classic Watch",
      price: 129.99,
      image: "/placeholder.svg?height=400&width=300",
      category: "Accessories",
    },
    {
      id: "4",
      name: "Leather Wallet",
      price: 49.99,
      image: "/placeholder.svg?height=400&width=300",
      category: "Accessories",
    },
    {
      id: "5",
      name: "Minimalist Backpack",
      price: 89.99,
      image: "/placeholder.svg?height=400&width=300",
      category: "Accessories",
    },
    {
      id: "6",
      name: "Slim Fit Jeans",
      price: 79.99,
      image: "/placeholder.svg?height=400&width=300",
      category: "Apparel",
    },
    {
      id: "7",
      name: "Canvas Sneakers",
      price: 69.99,
      image: "/placeholder.svg?height=400&width=300",
      category: "Footwear",
    },
    {
      id: "8",
      name: "Ceramic Mug Set",
      price: 39.99,
      image: "/placeholder.svg?height=400&width=300",
      category: "Home",
    },
  ];

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold">All Products</h1>
          <p className="text-muted-foreground">
            Showing {products.length} products
          </p>
        </div>
        <div className="flex items-center gap-4 w-full md:w-auto">
          <div className="relative w-full md:w-auto">
            <Input
              placeholder="Search products..."
              className="pl-8 md:w-[300px]"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Filter className="h-4 w-4" />
                <span className="sr-only">Filter</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>Filters</SheetTitle>
                <SheetDescription>
                  Narrow down your product search with filters.
                </SheetDescription>
              </SheetHeader>
              <div className="py-6 space-y-6">
                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Categories</h3>
                  <div className="grid gap-2">
                    <div className="flex items-center gap-2">
                      <Checkbox id="apparel-mobile" />
                      <Label htmlFor="apparel-mobile">Apparel</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox id="accessories-mobile" />
                      <Label htmlFor="accessories-mobile">Accessories</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox id="footwear-mobile" />
                      <Label htmlFor="footwear-mobile">Footwear</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox id="home-mobile" />
                      <Label htmlFor="home-mobile">Home</Label>
                    </div>
                  </div>
                </div>
                <Separator />
                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Price Range</h3>
                  <div className="grid gap-2">
                    <div className="flex items-center gap-2">
                      <Checkbox id="price-1-mobile" />
                      <Label htmlFor="price-1-mobile">Under $50</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox id="price-2-mobile" />
                      <Label htmlFor="price-2-mobile">$50 - $100</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox id="price-3-mobile" />
                      <Label htmlFor="price-3-mobile">$100 - $200</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox id="price-4-mobile" />
                      <Label htmlFor="price-4-mobile">$200+</Label>
                    </div>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="newest">Newest</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8">
        <div className="hidden md:block space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium">Filters</h3>
              <Button
                variant="ghost"
                size="sm"
                className="h-auto p-0 text-muted-foreground"
              >
                Reset
              </Button>
            </div>
            <Separator />
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium">Categories</h3>
            <div className="grid gap-2">
              <div className="flex items-center gap-2">
                <Checkbox id="apparel" />
                <Label htmlFor="apparel">Apparel</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="accessories" />
                <Label htmlFor="accessories">Accessories</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="footwear" />
                <Label htmlFor="footwear">Footwear</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="home" />
                <Label htmlFor="home">Home</Label>
              </div>
            </div>
          </div>

          <Separator />

          <div className="space-y-4">
            <h3 className="text-sm font-medium">Price Range</h3>
            <div className="grid gap-2">
              <div className="flex items-center gap-2">
                <Checkbox id="price-1" />
                <Label htmlFor="price-1">Under $50</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="price-2" />
                <Label htmlFor="price-2">$50 - $100</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="price-3" />
                <Label htmlFor="price-3">$100 - $200</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="price-4" />
                <Label htmlFor="price-4">$200+</Label>
              </div>
            </div>
          </div>

          <Separator />

          <div className="space-y-4">
            <h3 className="text-sm font-medium">Colors</h3>
            <div className="grid grid-cols-5 gap-2">
              <div className="h-8 w-8 rounded-full bg-black border border-muted cursor-pointer" />
              <div className="h-8 w-8 rounded-full bg-white border border-muted cursor-pointer" />
              <div className="h-8 w-8 rounded-full bg-gray-500 border border-muted cursor-pointer" />
              <div className="h-8 w-8 rounded-full bg-blue-500 border border-muted cursor-pointer" />
              <div className="h-8 w-8 rounded-full bg-red-500 border border-muted cursor-pointer" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              category={product.category}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
