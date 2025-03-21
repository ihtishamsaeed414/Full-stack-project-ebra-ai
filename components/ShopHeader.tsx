"use client";

import Link from "next/link";
import Image from "next/image";
import image from "../public/Paste Image.png";

export default function ShopHeader() {
  return (
    <div className="relative h-[300px] mb-8">
      <Image
        src={image.src}
        alt="Shop Hero"
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 bg-black/10" />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
        {/* Breadcrumb navigation component. Displaying links showing the user's navigation path. */}
        <nav className="mb-4">
          <ol className="flex items-center space-x-2 text-sm text-white/80">
            <li>
              <Link href="/" className="hover:text-blue text-white">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>Shop</li>
          </ol>
        </nav>

        <h1 className="text-4xl font-medium text-white mb-4">Shop Page</h1>
        <p className="text-white/100">
          Shop the best deals around -{" "}
          <span className="text-gray-600 font-bold">Try Ebra |إبراء </span>
        </p>
      </div>
    </div>
  );
}
