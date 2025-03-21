"use client";

import Link from "next/link";
import { useCartStore } from "@/store/cartStore";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";

// =============================
// Header of the shop
// =============================

export default function Header() {
  const items = useCartStore((state) => state.items);
  // Tracking number of cart items
  const itemCount = items.reduce(
    (total: number, item: { quantity: number }) => total + item.quantity,
    0
  );

  return (
    <>
      <div className="bg-black text-white text-xs py-2 px-4 text-center">
        <span className="inline-flex items-center">
          Welcome - Design and Developed by Ihtisham Saeed
        </span>
      </div>

      <header className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl text-black font-semibold">
              Ebra | إبراء
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              <Link
                href="/"
                className="px-4 py-2 text-gray-700 border border-gray-500 rounded-md hover:bg-gray-500 hover:text-white transition duration-300"
              >
                Products List
              </Link>
            </nav>

            <div className="flex items-center space-x-2">
              <p>Cart</p>

              <Link href="/cart" className=" relative">
                <ShoppingBagIcon className="h-5 w-5 text-gray-700" />

                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
