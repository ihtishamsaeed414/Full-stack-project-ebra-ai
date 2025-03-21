"use client";

import { api } from "@/services/api";
import ProductCard from "./ProductCard";

export default async function ProductList() {
  // Fetching all products
  const products = await api.getProducts();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
