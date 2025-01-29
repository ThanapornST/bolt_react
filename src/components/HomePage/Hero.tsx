import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative h-[50vh] bg-[url('https://i.pinimg.com/736x/1b/1e/e3/1b1ee3d86646fe340532617b70a76339.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-5xl font-bold mb-6">
          Create your dream novel with the power of intelligent AI.
        </h1>
        <p className="text-xl text-gray-200 max-w-2xl">
          Let AI help craft the story, filling in the imagination, while
          generating a vivid narrative voice!
        </p>
        <div className="mt-8">
          <Link
            to="/register"
            className="inline-block px-8 py-3 bg-gradient-to-r from-sky-500 to-blue-700 text-white rounded-full hover:from-red-600 hover:to-orange-600 transition-all text-lg font-semibold shadow-lg"
          >
            Start creating a novel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;