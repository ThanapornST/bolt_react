import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NovelCard = ({ category, title, description }: { category: string; title: string; description: string }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 120;
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/character-dialogue');
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden flex">
      {/* รูปภาพและปุ่ม Play Audio */}
      <div className="w-1/3 relative">
        <img
          src="https://i.pinimg.com/736x/c0/4d/d9/c04dd96f6090328857b71441fb3cdc96.jpg"
          alt="Novel"
          className="w-full h-full object-cover"
        />
        <button className="absolute left-1/2 bottom-4 transform -translate-x-1/2 transition-all rounded-full p-3 active:translate-y-1">
          <img
            src="https://cdn-icons-png.flaticon.com/512/15430/15430907.png"
            alt="Play Audio"
            className="w-12 h-12"
          />
        </button>
      </div>

      {/* ข้อมูลนิยาย */}
      <div className="w-2/3 p-4 flex flex-col justify-between">
        <div>
          <span className="text-sm text-gray-500">Category: {category}</span>
          <h4 className="text-lg font-semibold text-gray-900 mt-2">{title}</h4>

          <p className="text-sm text-gray-600">
            {isExpanded ? description : `${description.substring(0, maxLength)}...`}
          </p>

          {description.length > maxLength && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-blue-500 hover:underline text-sm mt-1"
            >
              {isExpanded ? "Read Less" : "Read More"}
            </button>
          )}
        </div>

        <button 
          onClick={handleGetStarted}
          className="inline-block px-6 py-2 bg-gradient-to-r from-sky-500 to-blue-700 text-white rounded-full hover:from-red-600 hover:to-orange-600 transition-all text-lg font-semibold shadow-lg"
        >
          Get Started Free
        </button>
      </div>
    </div>
  );
};

const NovelExamples = () => {
  return (
    <div className="bg-white lg:px-8">
      <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">
        Try listening to and reading an AI-generated novel example from us
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        <NovelCard
          category="Past, Present, Future"
          title="The little country doctor turns her life towards wealth."
          description="The little country doctor turns her life towards wealth."
        />
        <NovelCard
          category="Past, Present, Future"
          title="The Glittering Swan, The Phantom Tiger"
          description="The Glittering Swan, The Phantom TigerThe Glittering Swan, The Phantom TigerThe Glittering Swan, The Phantom TigerThe Glittering Swan, The Phantom TigerThe Glittering Swan, The Phantom Tiger"
        />
      </div>
    </div>
  );
};

export default NovelExamples;