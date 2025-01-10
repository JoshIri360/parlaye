"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Logo />
          <div className="hidden md:flex items-center justify-between flex-1 ml-10">
            <div className="flex space-x-4">
              <Link href="/" className="text-gray-300 hover:text-white">
                Home
              </Link>
              <Link
                href="/how-it-works"
                className="text-gray-300 hover:text-white"
              >
                How it works
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-white">
                About
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-white">
                Contact Us
              </Link>
            </div>
            <Link
              href="/download"
              className="bg-gradient-to-b from-[#19E094] to-[#084F34] text-white px-4 py-2 rounded-full"
            >
              Download
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white z-50 relative"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu - Full height, slides from right */}
      <div 
        className={`
          fixed top-0 right-0 h-full w-64 bg-black transform transition-transform duration-300 ease-in-out
          md:hidden
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
        style={{ zIndex: 40 }}
      >
        <div className="flex flex-col h-full pt-20 px-4">
          <div className="space-y-4">
            <Link
              href="/"
              className="block text-gray-300 hover:text-white py-2"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/how-it-works"
              className="block text-gray-300 hover:text-white py-2"
              onClick={() => setIsOpen(false)}
            >
              How it works
            </Link>
            <Link
              href="/about"
              className="block text-gray-300 hover:text-white py-2"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block text-gray-300 hover:text-white py-2"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
            <Link
              href="/download"
              className="block bg-gradient-to-b from-[#19E094] to-[#084F34] text-white px-4 py-2 rounded-md mt-2"
              onClick={() => setIsOpen(false)}
            >
              Download
            </Link>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden"
          style={{ zIndex: 30 }}
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  );
}