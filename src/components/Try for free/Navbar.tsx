import React from 'react';
import { Pen } from 'lucide-react';

function Navbar() {
  return (
    <nav className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center gap-2">
              <Pen className="h-6 w-6" />
              <span className="font-bold text-xl">WriteWhisper</span>
            </div>
            <div className="hidden md:block ml-10">
              <div className="flex items-center space-x-8">
                <a href="#" className="text-white hover:text-gray-300">Home</a>
                <a href="#" className="text-white hover:text-gray-300">Write a Story</a>
                <a href="#" className="text-white hover:text-gray-300">Showcase</a>
                <a href="#" className="text-white hover:text-gray-300">Blogs</a>
                <a href="#" className="text-white hover:text-gray-300 border-b-2 border-white">Pricing</a>
                <a href="#" className="text-white hover:text-gray-300">About Us</a>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-white hover:text-gray-300 bg-blue-600 px-4 py-2 rounded-lg">Try for free</a>
            <a href="#" className="text-white hover:text-gray-300">Login</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;