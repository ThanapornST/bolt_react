import React from 'react';
import { Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-b from-blue-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full mb-8">
          <Sparkles className="w-5 h-5 text-blue-500" />
          <span className="text-blue-700 font-medium">Special Launch Offer - Get 50% Extra Credits</span>
        </div>
        
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Create Amazing Stories with AI
        </h1>
        
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
          Transform your ideas into captivating novels with our AI-powered writing assistant.
          Start for free and unlock your creative potential.
        </p>
        
        <div className="flex justify-center space-x-4">
          <button className="px-8 py-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-lg font-semibold">
            Start Writing for Free
          </button>
          <button className="px-8 py-4 bg-white text-blue-500 rounded-lg border-2 border-blue-500 hover:bg-blue-50 transition-colors text-lg font-semibold">
            View Demo
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;