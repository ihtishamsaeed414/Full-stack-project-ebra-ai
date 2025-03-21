"use client";

import Image from "next/image";
import { useCartStore } from "@/store/cartStore";
import { useState } from "react";

interface CartItem {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
  color: string;
}

// =============================
// Item purchasing details
// =============================

export default function CheckoutPage() {
  const { items, getTotal } = useCartStore();
  const [paymentMethod, setPaymentMethod] = useState<"card" | "paypal">("card");

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Check Out</h1>

      {/* Progress Steps */}
      <div className="flex items-center justify-center mb-12">
        <div className="flex items-center">
          <div className="flex items-center">
            <span className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center">
              ✓
            </span>
            <span className="ml-2 text-gray-600">Shopping cart</span>
          </div>

          <div className="w-24 h-[2px] bg-gray-200 mx-4"></div>
          <div className="flex items-center">
            <span className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center">
              2
            </span>
            <span className="ml-2 font-medium">Checkout details</span>
          </div>

          <div className="w-24 h-[2px] bg-gray-200 mx-4"></div>
          <div className="flex items-center">
            <span className="w-8 h-8 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center">
              3
            </span>
            <span className="ml-2 text-gray-600">Order complete</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Contact and Shipping Information */}
        <div className="lg:w-2/3">
          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 className="text-lg font-medium mb-6">Contact Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  FIRST NAME
                </label>
                <input
                  type="text"
                  placeholder="First name"
                  className="w-full border rounded px-4 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  LAST NAME
                </label>
                <input
                  type="text"
                  placeholder="Last name"
                  className="w-full border rounded px-4 py-2"
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                PHONE NUMBER
              </label>
              <input
                type="tel"
                placeholder="Phone number"
                className="w-full border rounded px-4 py-2"
              />
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                EMAIL ADDRESS
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border rounded px-4 py-2"
              />
            </div>
          </div>

          {/* Shipping Address */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 className="text-lg font-medium mb-6">Shipping Address</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  STREET ADDRESS *
                </label>
                <input
                  type="text"
                  placeholder="Street Address"
                  className="w-full border rounded px-4 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  COUNTRY *
                </label>
                <select className="w-full border rounded px-4 py-2">
                  <option>Select Country</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  TOWN / CITY *
                </label>
                <input
                  type="text"
                  placeholder="Town / City"
                  className="w-full border rounded px-4 py-2"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    STATE
                  </label>
                  <input
                    type="text"
                    placeholder="State"
                    className="w-full border rounded px-4 py-2"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    ZIP CODE
                  </label>
                  <input
                    type="text"
                    placeholder="Zip Code"
                    className="w-full border rounded px-4 py-2"
                  />
                </div>
              </div>
            </div>

            <div className="mt-4">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm">
                  Use a different billing address (optional)
                </span>
              </label>
            </div>
          </div>

          {/* Payment Method details*/}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-medium mb-6">Payment method</h2>
            <div className="space-y-4">
              <label className="flex items-center p-4 border rounded cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === "card"}
                  onChange={() => setPaymentMethod("card")}
                  className="mr-2"
                />
                <span>Pay by Card Credit</span>
              </label>

              <label className="flex items-center p-4 border rounded cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === "paypal"}
                  onChange={() => setPaymentMethod("paypal")}
                  className="mr-2"
                />
                <span>Paypal</span>
              </label>
            </div>

            {paymentMethod === "card" && (
              <div className="mt-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    CARD NUMBER
                  </label>
                  <input
                    type="text"
                    placeholder="1234 1234 1234"
                    className="w-full border rounded px-4 py-2"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      EXPIRATION DATE
                    </label>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="w-full border rounded px-4 py-2"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      CVC
                    </label>
                    <input
                      type="text"
                      placeholder="CVC code"
                      className="w-full border rounded px-4 py-2"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:w-1/3">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-medium mb-6">Order summary</h2>

            {/* Order Items */}
            <div className="space-y-4 mb-6">
              {items.map((item, index) => (
                <div key={item.id} className="flex items-center">
                  <div className="relative w-16 h-16 mr-4">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-contain"
                    />
                  </div>

                  <div className="flex-1">
                    <p className="font-small">{item.title}</p>
                    <p className="text-sm text-gray-500">
                      Color: {item.color ? item.color : "N/A"}
                    </p>
                    <div className="flex items-center mt-1">
                      <span className="text-sm">Qty: {item.quantity}</span>
                      <span className="mx-2">×</span>
                      <span>${item.price.toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="text-right">
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Total details*/}
            <div className="border-t pt-4">
              <div className="flex justify-between mb-2">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>${getTotal().toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-medium text-lg">
                <span>Total</span>
                <span>${getTotal().toFixed(2)}</span>
              </div>
            </div>

            <button
              onClick={() => (window.location.href = "/complete")}
              className="w-full bg-black text-white py-3 px-4 rounded text-center block mt-6 hover:bg-gray-800"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
