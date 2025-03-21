"use client";

import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "@/store/cartStore";
import { CartItem as StoreCartItem } from "@/types";

interface CartItem extends Omit<StoreCartItem, 'color'> {
  color?: string;
}

// =============================
// Order details
// =============================

export default function OrderCompletePage() {
  const { items, getTotal } = useCartStore();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Complete!</h1>

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
            <span className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center">
              ✓
            </span>
            <span className="ml-2 text-gray-600">Checkout details</span>
          </div>

          <div className="w-24 h-[2px] bg-gray-200 mx-4"></div>
          <div className="flex items-center">
            <span className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center">
              3
            </span>
            <span className="ml-2 font-medium">Order complete</span>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm p-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-medium mb-4">Thank you! 🎉</h2>
          <p className="text-xl">Your order has been received</p>
        </div>

        {/* Order Items */}
        <div className="flex justify-center gap-4 flex-wrap mb-8">
          {items.map((item) => (
            <div key={item.id} className="relative">
              <div className="relative w-24 h-24">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain"
                />
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-black text-white text-xs rounded-full flex items-center justify-center">
                  {item.quantity}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Order Details */}
        <div className="space-y-4 text-center">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Order code:</span>
            <span className="font-medium">#0123_45678</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Date:</span>
            <span className="font-medium">{new Date().toLocaleDateString()}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Total:</span>
            <span className="font-medium">${getTotal().toFixed(2)}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Payment method:</span>
            <span className="font-medium">Credit Card</span>
          </div>
        </div>

        <Link
          href="/shop"
          className="w-full bg-black text-white py-3 px-4 rounded text-center block mt-8 hover:bg-gray-800"
        >
          Go To Shop
        </Link>
      </div>
    </div>
  );
}
