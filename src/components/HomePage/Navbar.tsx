import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="relative z-10 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xl font-semibold text-white">
            WriteWhisper
          </span>
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-white hover:text-blue-400 transition-colors">Home</a>
          <a href="#" className="text-white hover:text-blue-400 transition-colors">Write a Story</a>
          <a href="#" className="text-white hover:text-blue-400 transition-colors">Showcase</a>
          <a href="#" className="text-white hover:text-blue-400 transition-colors">Blogs</a>
          <a href="#" className="text-white hover:text-blue-400 transition-colors">Pricing</a>
          <a href="#" className="text-white hover:text-blue-400 transition-colors">About Us</a>
        </div>
        <div className="flex gap-4">
          <Link to="/register" className="px-4 py-2 text-white hover:text-blue-300 transition-colors">
            Try for free
          </Link>
          <Link to="/login" className="px-4 py-2 text-white hover:text-blue-300 transition-colors">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;