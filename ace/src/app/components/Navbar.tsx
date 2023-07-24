import React from 'react';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 bg-opacity-50 w-full fixed top-0 z-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div>
            <Image src="/images/logo.png" width={100} height={50} alt="Logo" />
          </div>
          <div className="hidden md:flex space-x-4">
            <a href="/">Home</a>
            <a href="/about">About</a>
            {/* Add more navigation links as needed */}
          </div>
          <div className="md:hidden">
            {/* Hamburger icon or mobile menu button */}
            <button className="text-white focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <div className="md:hidden hidden bg-gray-800 w-full">
        <div className="container mx-auto py-4 px-4 space-y-4">
          <a href="/">Home</a>
          <a href="/about">About</a>
          {/* Add more navigation links as needed */}
        </div>
      </div>
    </nav>
  );
}
