"use client";

import { useState } from "react";
import { Suspense } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { api } from "@/services/api";
import { useCartStore } from "@/store/cartStore";
import LoadingSpinner from "@/components/LoadingSpinner";
import ProductCountdown from "@/components/ProductCountdown";
import ProductReviews from "@/components/ProductReviews";
import Link from "next/link";
import { toast } from "react-hot-toast";

// =============================
// Selected item details
// =============================

function ProductDetailsContent({ product }: { product: any }) {
  const { addItem } = useCartStore();
  const [quantity, setQuantity] = useState(1);

  // Sample reviews to enhance the website's appearance
  const reviews = [
    {
      id: 1,
      author: "Joe William",
      rating: 5,
      date: "2 days ago",
      content:
        "This product exceeded my expectations! The quality is outstanding, and it looks even better in person. Highly recommend it to anyone considering the purchase.",
      avatar: "/images/avatar-1.jpg",
    },
    {
      id: 2,
      author: "Michael Chen",
      rating: 4,
      date: "1 week ago",
      content:
        "Great product overall. The design is modern and fits perfectly with my home decor. Only giving 4 stars because shipping took a bit longer than expected.",
      avatar: "/images/avatar-2.jpg",
    },
    {
      id: 3,
      author: "Roberto",
      rating: 5,
      date: "2 weeks ago",
      content:
        "Absolutely love it! The attention to detail is impressive, and the customer service was excellent. Will definitely be purchasing more items from this store.",
      avatar: "/images/avatar-3.jpeg",
    },
    {
      id: 4,
      author: "Emily Rodriguez",
      rating: 5,
      date: "2 weeks ago",
      content:
        "Absolutely love it! The attention to detail is impressive, and the customer service was excellent. Will definitely be purchasing more items from this store.",
      avatar: "/images/avatar-4.jpg",
    },
    {
      id: 5,
      author: "Rose",
      rating: 5,
      date: "2 weeks ago",
      content:
        "Absolutely love it! The attention to detail is impressive, and the customer service was excellent. Will definitely be purchasing more items from this store.",
      avatar: "/images/avatar-5.jpg",
    },
  ];

  const handleQuantityChange = (value: number) => {
    if (value >= 1) {
      setQuantity(value);
    }
  };

  // Calculate total price based on quantity
  const totalPrice = product.price * quantity;

  // Handle add to cart functionality
  const handleAddToCart = () => {
    addItem({ ...product, quantity });
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    toast.success(`Product added to cart!`, {
      duration: 4000,
      position: "top-right",
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      {/* Breadcrumb navigation component.
      Displays a list of links showing the user's navigation path */}

      <nav className="mb-6">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <Link href="/" className="text-gray-500 hover:text-gray-900">
              Home
            </Link>
          </li>
          <li className="text-gray-500">/</li>
          <li>
            <Link href="/shop" className="text-gray-500 hover:text-gray-900">
              Shop
            </Link>
          </li>
          <li className="text-gray-500">/</li>
          <li>
            <Link
              href={`/shop/${product.category}`}
              className="text-gray-500 hover:text-gray-900"
            >
              {product.category}
            </Link>
          </li>
          <li className="text-gray-500">/</li>
          <li className="text-gray-900">{product.title}</li>
        </ol>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-4">
          <div className="relative aspect-square overflow-hidden bg-white">
            {/* Sale Badge */}
            <div className="absolute top-4 left-4 z-10 space-y-2">
              <span className="inline-block bg-black text-white text-xs px-2 py-1">
                NEW
              </span>
              <span className="inline-block bg-[#38CB89] text-white text-xs px-2 py-1">
                -50%
              </span>
            </div>

            <div className="relative w-full h-full mx-auto border-2 border-gray-500 flex items-center justify-center">
              <Image
                src={product.image}
                alt={product.title}
                width={300}
                height={300}
                className="object-contain hover:scale-110 transition-transform duration-300"
                sizes="(max-width: 768px) 0vh, 50vw"
                priority
              />
            </div>
          </div>
        </div>

        {/* Product Information */}
        <div>
          {/* Reviews */}
          <div className="flex items-center mb-4">
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
            <span className="ml-2 text-sm text-gray-500">
              {reviews.length} Reviews
            </span>
          </div>

          <h1 className="text-3xl font-medium text-gray-900 mb-2">
            {product.title}
          </h1>
          <p className="text-gray-500 mb-6">
            <span className="font-bold">Category:</span> {product.category}
          </p>

          <p className="text-gray-500 mb-4">{product.description}</p>

          <div className="flex items-center gap-4 mb-6">
            <div className="flex flex-col">
              <span className="text-2xl font-semibold">
                ${totalPrice.toFixed(2)}
              </span>
              <span className="text-sm text-gray-500">
                ${product.price.toFixed(2)} per item
              </span>
            </div>
            <span className="text-lg text-gray-500 line-through">
              ${(product.price * 2).toFixed(2)}
            </span>
            <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-sm">
              50% OFF
            </span>
          </div>

          {/* Countdown Timer */}
          <div className="mb-8">
            <p className="text-sm text-gray-500 mb-2">Offer expires in:</p>
            <ProductCountdown />
          </div>

          {/* Quantity and Add to Cart */}
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center border border-gray-300 rounded">
              <button
                className="px-3 py-2 text-gray-500 hover:text-gray-700"
                onClick={() => handleQuantityChange(quantity - 1)}
              >
                -
              </button>
              <input
                type="number"
                className="w-16 text-center border-x border-gray-300 py-2"
                value={quantity}
                min="1"
                onChange={(e) => handleQuantityChange(parseInt(e.target.value))}
              />
              <button
                className="px-3 py-2 text-gray-500 hover:text-gray-700"
                onClick={() => handleQuantityChange(quantity + 1)}
              >
                +
              </button>
            </div>
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-black text-white py-2 px-6 rounded hover:bg-gray-800 transition-colors"
            >
              Add to Cart
            </button>
          </div>

          {/* Additional Info */}
          <div className="border-t border-gray-200 pt-8 mt-8">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-500">SKU: </span>
                <span className="font-medium">1117</span>
              </div>
              <div>
                <span className="text-gray-500">Category: </span>
                <Link
                  href={`/shop/${product.category}`}
                  className="font-medium hover:text-gray-700 capitalize"
                >
                  {product.category}
                </Link>
              </div>
              <div>
                <span className="text-gray-500">Tags: </span>
                <span className="font-medium">Modern, Furniture</span>
              </div>
              <div>
                <span className="text-gray-500">Stock: </span>
                <span className="font-medium text-green-600">In Stock</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-16">
        <div className="border-b border-gray-200">
          <nav className="flex gap-8">
            <button className="border-b-2 border-black px-4 py-2 text-sm font-medium">
              Description
            </button>
          </nav>
        </div>
        <div className="py-8">
          <p className="text-gray-600 leading-relaxed">{product.description}</p>
          <ProductReviews reviews={reviews} />
        </div>
      </div>
    </div>
  );
}

async function ProductDetails({ id }: { id: string }) {
  const product = await api.getProduct(parseInt(id));

  // checks if the selected product exists
  if (!product) {
    notFound();
  }

  return <ProductDetailsContent product={product} />;
}

export default function ProductPage({ params }: { params: { id: string } }) {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <ProductDetails id={params.id} />
    </Suspense>
  );
}
