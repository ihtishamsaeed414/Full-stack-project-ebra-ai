"use client";

import { Suspense } from "react";
import { api } from "@/services/api";
import ProductCard from "@/components/ProductCard";
import ShopHeader from "@/components/ShopHeader";
import LoadingSpinner from "@/components/LoadingSpinner";

// =============================
// Shop home page
// =============================

async function ProductGrid() {
  // Fetching products from the api
  const products = await api.getProducts();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default function ShopPage() {
  return (
    <div>
      <ShopHeader />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl">All Products</h2>
        </div>

        <div className="grid grid-cols-6 gap-8">
          {/* Product Display in the shop */}
          <div className="col-span-9">
            <Suspense fallback={<LoadingSpinner />}>
              <ProductGrid />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
