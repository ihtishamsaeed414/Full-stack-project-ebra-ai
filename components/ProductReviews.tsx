"use client";

import { useState } from "react";
import Image from "next/image";

interface Review {
  id: number;
  author: string;
  rating: number;
  date: string;
  content: string;
  avatar: string;
}

interface ProductReviewsProps {
  reviews: Review[];
}

// =============================
// Dummy reviews to improve shop appearance
// =============================

export default function ProductReviews({ reviews }: ProductReviewsProps) {
  const [sortBy, setSortBy] = useState("newest");

  return (
    <div className="py-8">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-medium">Customer Reviews</h2>
      </div>

      <div className="space-y-8">
        {reviews.map((review) => (
          <div key={review.id} className="border-b border-gray-200 pb-8">
            <div className="flex items-start gap-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src={review.avatar}
                  alt={review.author}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium">{review.author}</h3>
                  <span className="text-sm text-gray-500">{review.date}</span>
                </div>

                <div className="flex items-center mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className={`h-4 w-4 ${
                        star <= review.rating
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-gray-600">{review.content}</p>
                <div className="flex items-center gap-6 mt-4">
                  <button className="flex items-center text-sm text-gray-500 hover:text-gray-700">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                      />
                    </svg>
                    Helpful
                  </button>
                  <button className="text-sm text-gray-500 hover:text-gray-700">
                    Reply
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
