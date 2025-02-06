import React from 'react';

function Hero() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">สร้างเรื่องราวของคุณ</h1>
      
      <div className="flex flex-col items-center gap-3 mb-12">
        <div className="bg-blue-50 text-blue-700 px-6 py-2 rounded-full">
          <span className="text-sm">🎯 เริ่มต้นเพียง 400 คำแรก ฟรี! 🎉</span>
        </div>
        <a href="#" className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm hover:bg-blue-700 transition-colors">
          ทดลองใช้งาน
        </a>
      </div>
    </div>
  );
}

export default Hero;