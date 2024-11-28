"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

function Navbar() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="fixed top-0 inset-x-0 bg-white shadow-md z-50">
      <div className="flex items-center justify-between h-16 px-6">
        {/* Left Section: Logo */}
        <div className="flex items-center space-x-2">
          <Image
            src="/courses/logo-dark (1).jpg" // Replace with the correct logo path
            alt="Startup Logo"
            width={30}
            height={30}
            className="rounded-md"
          />
          <span className="text-lg font-semibold text-black">Startup</span>
        </div>

        {/* Center Section: Navigation Links */}
        <div className="flex items-center space-x-8">
          {/* Features Link */}
          <Link href="WhyChooseUs.tsx">
            <button className="text-black hover:text-teal-500 transition">
              Features
            </button>
          </Link>

          {/* Contact Dropdown */}
          <div
            onMouseEnter={() => setActive("Contact")}
            onMouseLeave={() => setActive(null)}
            className="relative"
          >
            <button className="text-black hover:text-teal-500 transition">
              Contact
            </button>
            {active === "Contact" && (
              <div className="absolute top-full mt-2 bg-white shadow-lg rounded-lg p-4">
                <div className="flex flex-col space-y-4 text-sm">
                  <Link href="/courses">All Courses</Link>
                  <Link href="/courses">Basic Music Theory</Link>
                  <Link href="/courses">Advanced Composition</Link>
                  <Link href="/courses">Songwriting</Link>
                  <Link href="/courses">Music Production</Link>
                </div>
              </div>
            )}
          </div>

          {/* Pricing Link */}
          <Link href="/pricing">
            <button className="text-black hover:text-teal-500 transition">
              Pricing
            </button>
          </Link>
        </div>

        {/* Right Section: Login and Book a Call */}
        <div className="flex items-center space-x-4">
          {/* Login */}
          <Link href="/login">
            <button className="text-black hover:text-teal-500 transition">
              Login
            </button>
          </Link>
          {/* Book a Call Button */}
          <Link href="/book-a-call">
            <button className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-700 transition">
              Book a Call
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
