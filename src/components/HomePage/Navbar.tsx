import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="relative z-10 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <Link to="/" className="text-xl font-semibold text-white hover:text-blue-400 transition-colors">
            WriteWhisper
          </Link>
        </div>
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-white hover:text-blue-400 transition-colors">Home</Link>
          <Link to="/create" className="text-white hover:text-blue-400 transition-colors">Write a Story</Link>
          <a href="#" className="text-white hover:text-blue-400 transition-colors">Showcase</a>
          <a href="#" className="text-white hover:text-blue-400 transition-colors">Blogs</a>
          <Link to="/pricing" className="text-white hover:text-blue-400 transition-colors">Pricing</Link>
          <a href="#" className="text-white hover:text-blue-400 transition-colors">About Us</a>
        </div>
        <div className="flex gap-4">
<<<<<<< HEAD
        <Link to="/pricing" className="px-4 py-2 text-white hover:text-blue-300 transition-colors">
=======
          <Link to="/pricing" className="px-4 py-2 text-white hover:text-blue-300 transition-colors">
>>>>>>> b7f7c3fcde8c70a031d0d11f8f549c66e7b12e08
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