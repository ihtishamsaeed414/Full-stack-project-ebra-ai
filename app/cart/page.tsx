"use client";

import Image from "next/image";
import { useCartStore } from "@/store/cartStore";
import { MinusIcon, PlusIcon, XMarkIcon } from "@heroicons/react/24/outline";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

interface CartItem {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
  color?: string;
}

// =============================
// Cart Management Functions
// =============================

export default function CartPage() {
  const { items, removeItem, updateQuantity, getTotal } = useCartStore();
  const router = useRouter();

  // Handle item deletion from the cart
  const handleRemoveCart = (item: CartItem) => {
    removeItem(item.id);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    toast.error(`Product deleted from cart!`, {
      duration: 4000,
      position: "top-right",
    });
  };

  // Check if the cart is empty
  const handleCheckout = () => {
    if (items.length === 0) {
      toast.error("Your cart is empty!", {
        duration: 4000,
        position: "top-right",
        style: {
          background: "#FACC15",
          color: "#000",
          padding: "12px 16px",
          borderRadius: "8px",
        },
        icon: "⚠️",
      });
    } else router.push("/checkout");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Cart</h1>

      {/* Purchase progress of the user */}
      <div className="flex items-center justify-center mb-12">
        <div className="flex items-center">
          <div className="flex items-center">
            <span className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center">
              1
            </span>
            <span className="ml-2 font-medium">Shopping cart</span>
          </div>

          <div className="w-24 h-[2px] bg-gray-200 mx-4"></div>
          <div className="flex items-center">
            <span className="w-8 h-8 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center">
              2
            </span>
            <span className="ml-2 text-gray-600">Checkout details</span>
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
        {/* Cart Items */}
        <div className="lg:w-2/3">
          <div className="bg-white rounded-lg shadow-sm">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-4 px-6">Product</th>
                  <th className="text-center py-4 px-6">Quantity</th>
                  <th className="text-right py-4 px-6">Price</th>
                  <th className="text-right py-4 px-6">Subtotal</th>
                </tr>
              </thead>

              <tbody>
                {items.map((item: CartItem) => (
                  <tr key={item.id} className="border-b">
                    <td className="py-2 px-6">
                      <div className="flex items-center">
                        <div className="relative w-20 h-20 mr-4">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-contain"
                          />
                        </div>
                        <div>
                          <h3 className="font-medium ">{item.title}</h3>

                          <button
                            onClick={() => handleRemoveCart(item)}
                            className="text-sm bg-red-500 text-white px-3 py-1 mt-1 rounded-md flex items-center hover:bg-red-600 transition-colors"
                          >
                            <XMarkIcon className="w-4 h-4 mr-1" />
                            Remove from Cart
                          </button>
                        </div>
                      </div>
                    </td>

                    <td className=" px-6">
                      <div className="flex items-center justify-center">
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              Math.max(1, item.quantity - 1)
                            )
                          }
                          className="p-1"
                        >
                          <MinusIcon className="w-4 h-4" />
                        </button>
                        <span className="mx-2 w-8 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="p-1"
                        >
                          <PlusIcon className="w-4 h-4" />
                        </button>
                      </div>
                    </td>

                    <td className="text-right py-4 px-6">
                      ${item.price.toFixed(2)}
                    </td>
                    <td className="text-right py-4 px-6">
                      ${(item.price * item.quantity).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Summary of Cart */}
        <div className="lg:w-1/3">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-medium mb-6">Cart summary</h2>

            {/* Shipping Options (Dummy data) */}
            <div className="space-y-4 mb-6">
              <label className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="shipping"
                    className="mr-2"
                    defaultChecked
                  />
                  <span>Free shipping</span>
                </div>
                <span>$0.00</span>
              </label>

              <label className="flex items-center justify-between">
                <div className="flex items-center">
                  <input type="radio" name="shipping" className="mr-2" />
                  <span>Express shipping</span>
                </div>
                <span>+$15.00</span>
              </label>

              <label className="flex items-center justify-between">
                <div className="flex items-center">
                  <input type="radio" name="shipping" className="mr-2" />
                  <span>Pick Up</span>
                </div>
                <span>%21.00</span>
              </label>
            </div>

            <div className="border-t pt-4">
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
              onClick={handleCheckout}
              className="w-full bg-black text-white py-3 px-4 rounded text-center block mt-6 hover:bg-gray-800"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
