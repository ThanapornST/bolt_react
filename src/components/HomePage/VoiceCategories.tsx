import React from 'react';

const categories = [
  { name: 'Fantasy', image: 'https://i.pinimg.com/736x/c0/4d/d9/c04dd96f6090328857b71441fb3cdc96.jpg' },
  { name: 'Horror', image: 'https://i.pinimg.com/736x/c0/4d/d9/c04dd96f6090328857b71441fb3cdc96.jpg' },
  { name: 'Romantic', image: 'https://i.pinimg.com/736x/c0/4d/d9/c04dd96f6090328857b71441fb3cdc96.jpg' },
  { name: 'Adventure', image: 'https://i.pinimg.com/736x/c0/4d/d9/c04dd96f6090328857b71441fb3cdc96.jpg' },
];

const VoiceCategories = () => {
  return (
    <div className="relative z-10 mt-[-80px] pb-16 bg-gradient-to-b from-black/40 to-white">
      <h2 className="text-3xl mt-10 font-semibold text-white text-center">
        Top 10 uses of narrative-style voices
      </h2>
      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
        {categories.map((category) => (
          <button key={category.name} className="relative w-48 aspect-[16/9] rounded-lg overflow-hidden">
            <img
              src={category.image}
              alt={category.name}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <span className="absolute bottom-2 left-2 text-white font-semibold">
              {category.name}
            </span>
            <button className="absolute bottom-2 right-2 bg-white p-2 rounded-full shadow-md hover:scale-110 transition-transform">
              <img
                src="https://cdn-icons-png.flaticon.com/512/15430/15430907.png"
                alt="Play Audio"
                className="w-6 h-6"
              />
            </button>
          </button>
        ))}
      </div>
    </div>
  );
};

export default VoiceCategories;