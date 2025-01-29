import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <div className="flex items-center justify-center md:justify-start space-x-2">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4 4h16v16H4z" />
            </svg>
            <span className="text-xl font-bold">WriteWhisper</span>
          </div>
          <p className="mt-2 text-gray-400">
            Write a novel, check statistics, and respond to reader comments instantly.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">How to use</h3>
          <ul className="space-y-1 text-gray-400">
            <li><a href="#" className="hover:text-white">How to write a novel</a></li>
            <li><a href="#" className="hover:text-white">Terms of Use</a></li>
            <li><a href="#" className="hover:text-white">Frequently Asked Questions</a></li>
            <li><a href="#" className="hover:text-white">How to top up Coins</a></li>
            <li><a href="#" className="hover:text-white">How to make payments</a></li>
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <ul className="space-y-1 text-gray-400">
              <li><a href="#" className="hover:text-white">Line Official</a></li>
              <li><a href="#" className="hover:text-white">Facebook</a></li>
              <li><a href="#" className="hover:text-white">X</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">More</h3>
            <ul className="space-y-1 text-gray-400">
              <li><a href="#" className="hover:text-white">News</a></li>
              <li><a href="#" className="hover:text-white">Writer's Board</a></li>
              <li><a href="#" className="hover:text-white">Read Novels</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;