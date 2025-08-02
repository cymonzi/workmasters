"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/#home" className="text-xl font-bold text-blue-900 hover:text-blue-700 transition-colors">
              WorkMasters
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/#home" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Home</Link>
            <Link href="/#about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">About</Link>
            <Link href="/#programs" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Programs</Link>
            <Link href="/#impact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Impact</Link>
            <Link href="/#team" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Team</Link>
            <Link 
              href="/apply" 
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              Apply Now
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              <Link href="/#home" className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link href="/#about" className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>About</Link>
              <Link href="/#programs" className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>Programs</Link>
              <Link href="/#impact" className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>Impact</Link>
              <Link href="/#team" className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>Team</Link>
              <Link 
                href="/apply" 
                className="block mx-3 mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Apply Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
