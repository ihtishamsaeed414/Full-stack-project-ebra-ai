import { Product } from "@/types";

// I am using api url for fall back here as well to make sure the website works correctly in this assessment
const BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "https://fakestoreapi.com";

async function fetchData<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`, options);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    throw new Error(`Failed to fetch ${endpoint}`);
  }
}

// API operations
export const api = {
  async getProducts(): Promise<Product[]> {
    return fetchData<Product[]>("products");
  },

  async getProduct(id: number): Promise<Product> {
    return fetchData<Product>(`products/${id}`);
  },

  async getCategories(): Promise<string[]> {
    return fetchData<string[]>("products/categories");
  },

  async getProductsByCategory(category: string): Promise<Product[]> {
    return fetchData<Product[]>(`products/category/${category}`);
  },
};
