'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

interface CartItem {
  id: string
  name: string
  price: number
  image: string
  quantity: number
}

export const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: '1',
      name: 'Minimal Tee',
      price: 29.99,
      image: '/placeholder.svg?height=400&width=300',
      quantity: 2,
    },
    {
      id: '3',
      name: 'Classic Watch',
      price: 129.99,
      image: '/placeholder.svg?height=400&width=300',
      quantity: 1,
    },
  ])

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return

    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    )
  }

  const removeItem = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )

  return (
    <Sheet>
      <SheetTrigger>
        <ShoppingBag className="cursor-pointer" />
      </SheetTrigger>
      <SheetContent className="w-full sm:min-w-lg">
        <SheetHeader>
          <SheetTitle>Meu Carrinho</SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <div className="px-4">
          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-medium mb-4">
                Seu carrinho está vazio
              </h2>
              <p className="text-muted-foreground mb-8">
                Parece que você ainda não adicionou nada ao seu carrinho.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2 space-y-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4 py-4">
                    <div className="relative aspect-square h-24 w-24 min-w-[6rem] overflow-hidden rounded-md">
                      <Image
                        src={item.image || '/placeholder.svg'}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-1 flex-col justify-between">
                      <div className="grid gap-1">
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          Size: Medium
                        </p>
                        <p className="font-medium">${item.price.toFixed(2)}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center border rounded-md">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 rounded-none"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                          >
                            <Minus className="h-3 w-3" />
                            <span className="sr-only">Decrease quantity</span>
                          </Button>
                          <Input
                            type="number"
                            min="1"
                            className="h-8 w-12 border-0 text-center [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                            value={item.quantity}
                            onChange={(e) =>
                              updateQuantity(
                                item.id,
                                Number.parseInt(e.target.value) || 1
                              )
                            }
                          />
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 rounded-none"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                          >
                            <Plus className="h-3 w-3" />
                            <span className="sr-only">Increase quantity</span>
                          </Button>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => removeItem(item.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                          <span className="sr-only">Remove item</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <SheetFooter>
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">Subtotal</span>
            <span>R${subtotal.toFixed(2)}</span>
          </div>
          <Link href="/checkout">
            <Button className="w-full cursor-pointer">Ir para Checkout</Button>
          </Link>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
