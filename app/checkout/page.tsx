"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { CreditCard, ShieldCheck, Truck } from "lucide-react";
import Image from "next/image";
import { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "sonner";

export default function CheckoutPage() {
  const [activeStep, setActiveStep] = useState("shipping");
  const [formData, setFormData] = useState({
    // Shipping
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "United States",
    // Payment
    cardName: "",
    cardNumber: "",
    expDate: "",
    cvv: "",
    // Shipping Method
    shippingMethod: "standard",
  });

  const cartItems = [
    {
      id: "1",
      name: "Minimal Tee",
      price: 29.99,
      image: "/placeholder.svg?height=400&width=300",
      quantity: 2,
      size: "M",
      color: "Black",
    },
    {
      id: "3",
      name: "Classic Watch",
      price: 129.99,
      image: "/placeholder.svg?height=400&width=300",
      quantity: 1,
      color: "Silver",
    },
  ];

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleShippingMethodChange = (value: string) => {
    setFormData({
      ...formData,
      shippingMethod: value,
    });
  };

  const handleSubmitShipping = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Validate shipping form
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.address ||
      !formData.city ||
      !formData.zipCode
    ) {
      toast("Missing Information", {
        description: "Please fill in all required fields.",
      });
      return;
    }
    setActiveStep("payment");
  };

  const handleSubmitPayment = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Validate payment form
    if (
      !formData.cardName ||
      !formData.cardNumber ||
      !formData.expDate ||
      !formData.cvv
    ) {
      toast("Missing Information", {
        description: "Please fill in all payment details.",
      });
      return;
    }
    setActiveStep("review");
  };

  const handlePlaceOrder = () => {
    toast("Order Placed!", {
      description: "Your order has been successfully placed.",
    });
    // Redirect to confirmation page in a real app
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const shipping = formData.shippingMethod === "express" ? 15.99 : 5.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Checkout</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <h1 className="text-3xl font-bold mb-8">Checkout</h1>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Tabs value={activeStep} className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger
                value="shipping"
                onClick={() => setActiveStep("shipping")}
                disabled={activeStep === "review"}
              >
                Shipping
              </TabsTrigger>
              <TabsTrigger
                value="payment"
                onClick={() => setActiveStep("payment")}
                disabled={activeStep === "shipping" || activeStep === "review"}
              >
                Payment
              </TabsTrigger>
              <TabsTrigger
                value="review"
                onClick={() => setActiveStep("review")}
                disabled={activeStep === "shipping" || activeStep === "payment"}
              >
                Review
              </TabsTrigger>
            </TabsList>

            {/* Shipping Tab */}
            <TabsContent value="shipping" className="pt-6">
              <form onSubmit={handleSubmitShipping}>
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl font-semibold mb-4">
                      Contact Information
                    </h2>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h2 className="text-xl font-semibold mb-4">
                      Shipping Address
                    </h2>
                    <div className="grid gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="address">Address *</Label>
                        <Input
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="city">City *</Label>
                          <Input
                            id="city"
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="state">State/Province *</Label>
                          <Input
                            id="state"
                            name="state"
                            value={formData.state}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="zipCode">ZIP/Postal Code *</Label>
                          <Input
                            id="zipCode"
                            name="zipCode"
                            value={formData.zipCode}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="country">Country *</Label>
                          <Input
                            id="country"
                            name="country"
                            value={formData.country}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h2 className="text-xl font-semibold mb-4">
                      Shipping Method
                    </h2>
                    <RadioGroup
                      value={formData.shippingMethod}
                      onValueChange={handleShippingMethodChange}
                      className="space-y-3"
                    >
                      <div className="flex items-center space-x-2 border p-4 rounded-lg">
                        <RadioGroupItem value="standard" id="standard" />
                        <Label
                          htmlFor="standard"
                          className="flex-1 cursor-pointer"
                        >
                          <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                              <Truck className="h-5 w-5 text-muted-foreground" />
                              <span>Standard Shipping (3-5 business days)</span>
                            </div>
                            <span className="font-medium">$5.99</span>
                          </div>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 border p-4 rounded-lg">
                        <RadioGroupItem value="express" id="express" />
                        <Label
                          htmlFor="express"
                          className="flex-1 cursor-pointer"
                        >
                          <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                              <Truck className="h-5 w-5 text-muted-foreground" />
                              <span>Express Shipping (1-2 business days)</span>
                            </div>
                            <span className="font-medium">$15.99</span>
                          </div>
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="notes">Order Notes (Optional)</Label>
                    <Textarea
                      id="notes"
                      name="notes"
                      placeholder="Special instructions for delivery"
                      className="min-h-[100px]"
                    />
                  </div>

                  <div className="flex justify-end">
                    <Button type="submit" size="lg">
                      Continue to Payment
                    </Button>
                  </div>
                </div>
              </form>
            </TabsContent>

            {/* Payment Tab */}
            <TabsContent value="payment" className="pt-6">
              <form onSubmit={handleSubmitPayment}>
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl font-semibold mb-4">
                      Payment Method
                    </h2>
                    <div className="border rounded-lg p-4 mb-6">
                      <div className="flex items-center gap-2 mb-4">
                        <CreditCard className="h-5 w-5" />
                        <span className="font-medium">Credit Card</span>
                      </div>
                      <div className="grid gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="cardName">Name on Card *</Label>
                          <Input
                            id="cardName"
                            name="cardName"
                            value={formData.cardName}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cardNumber">Card Number *</Label>
                          <Input
                            id="cardNumber"
                            name="cardNumber"
                            placeholder="1234 5678 9012 3456"
                            value={formData.cardNumber}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="expDate">Expiration Date *</Label>
                            <Input
                              id="expDate"
                              name="expDate"
                              placeholder="MM/YY"
                              value={formData.expDate}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="cvv">CVV *</Label>
                            <Input
                              id="cvv"
                              name="cvv"
                              placeholder="123"
                              value={formData.cvv}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <ShieldCheck className="h-4 w-4" />
                      <span>
                        Your payment information is secure and encrypted
                      </span>
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setActiveStep("shipping")}
                    >
                      Back to Shipping
                    </Button>
                    <Button type="submit" size="lg">
                      Review Order
                    </Button>
                  </div>
                </div>
              </form>
            </TabsContent>

            {/* Review Tab */}
            <TabsContent value="review" className="pt-6">
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold mb-4">
                    Review Your Order
                  </h2>
                  <div className="grid gap-6">
                    <div className="border rounded-lg p-4">
                      <h3 className="font-medium mb-2">Shipping Information</h3>
                      <p>
                        {formData.firstName} {formData.lastName}
                        <br />
                        {formData.address}
                        <br />
                        {formData.city}, {formData.state} {formData.zipCode}
                        <br />
                        {formData.country}
                        <br />
                        {formData.email}
                        <br />
                        {formData.phone}
                      </p>
                    </div>

                    <div className="border rounded-lg p-4">
                      <h3 className="font-medium mb-2">Payment Method</h3>
                      <div className="flex items-center gap-2">
                        <CreditCard className="h-5 w-5" />
                        <span>
                          Credit Card ending in {formData.cardNumber.slice(-4)}
                        </span>
                      </div>
                    </div>

                    <div className="border rounded-lg p-4">
                      <h3 className="font-medium mb-2">Shipping Method</h3>
                      <p>
                        {formData.shippingMethod === "standard"
                          ? "Standard Shipping (3-5 business days)"
                          : "Express Shipping (1-2 business days)"}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setActiveStep("payment")}
                  >
                    Back to Payment
                  </Button>
                  <Button type="button" size="lg" onClick={handlePlaceOrder}>
                    Place Order
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="lg:col-span-1">
          <div className="border rounded-lg p-6 bg-muted/10 sticky top-6">
            <h2 className="font-semibold text-lg mb-4">Order Summary</h2>

            <div className="space-y-4 mb-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="relative h-16 w-16 overflow-hidden rounded-md">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-sm">{item.name}</h3>
                    <p className="text-xs text-muted-foreground">
                      {item.size && `Size: ${item.size}`}
                      {item.size && item.color && " / "}
                      {item.color && `Color: ${item.color}`}
                    </p>
                    <div className="flex justify-between mt-1">
                      <p className="text-sm">Qty: {item.quantity}</p>
                      <p className="text-sm font-medium">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Separator className="my-4" />

            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <Separator className="my-2" />
              <div className="flex justify-between font-medium">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
