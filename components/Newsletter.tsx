"use client";

import { useState } from "react";
import toast from "react-hot-toast";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup - for cool website appearance
    toast.success(`Subscribed successfully!`, {
      duration: 4000,
      position: "top-right",
    });
    setEmail("");
  };

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Join Our Newsletter
            </h2>
            <p className="text-gray-600">
              Sign up for deals, new products and promotions
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex-1 w-full">
            <div className="flex gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="flex-1 px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-black text-white rounded hover:bg-gray-800 transition-colors"
              >
                Signup
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
