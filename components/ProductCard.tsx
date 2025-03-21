"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types";
import { useCartStore } from "@/store/cartStore";
import toast from "react-hot-toast";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCartStore();
  const [isHovered, setIsHovered] = useState(false);

  // Add item to cart right from the home page
  const handleAddToCart = () => {
    addItem({ ...product, quantity: 1 });
    toast.success(`Product added to cart!`, {
      duration: 4000,
      position: "top-right",
    });
  };
  return (
    <div
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-square overflow-hidden bg-white">
        {/* Badges */}
        <div className="absolute top-4 left-4 z-10 space-y-2">
          <span className="inline-block bg-black text-white text-xs px-2 py-1">
            NEW
          </span>
          <span className="inline-block bg-[#38CB89] text-white text-xs px-2 py-1">
            -50%
          </span>
        </div>

        <Link href={`/product/${product.id}`} className="cursor-pointer h-full">
          <div className="relative w-full h-full flex items-center justify-center border-2 border-gray-500 rounded-lg">
            <Image
              src={product.image}
              alt={product.title}
              width={200}
              height={200}
              className="object-contain hover:scale-110 transition-transform duration-300"
              sizes="(max-width: 768px) 50vw, 50vw"
              priority
            />
          </div>
        </Link>

        {/* Add to Cart Button */}
        {isHovered && (
          <button
            onClick={handleAddToCart}
            className="absolute bottom-4 left-4 right-4 bg-black text-white text-sm py-2 px-4 rounded opacity-0 group-hover:opacity-100 transition-opacity"
          >
            Add to Cart
          </button>
        )}
      </div>

      <div className="mt-4 space-y-2">
        {/*Dummy rating */}
        <div className="flex items-center">
          {[1, 2, 3, 4, 5].map((rating) => (
            <svg
              key={rating}
              className="h-4 w-4 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>

        {/* Title */}
        <Link
          href={`/product/${product.id}`}
          className="block text-gray-900 hover:text-black transition-colors"
        >
          <h3 className="text-sm font-medium">{product.title}</h3>
        </Link>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="font-medium">${product.price.toFixed(2)}</span>
          <span className="text-gray-500 line-through">
            ${(product.price * 2).toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}
