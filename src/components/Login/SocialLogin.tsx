import React from 'react';

const SocialLogin = () => {
  return (
    <div className="space-y-4">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">หรือเข้าสู่ระบบด้วย</span>
        </div>
      </div>
      <div className="flex justify-center space-x-4">
        <button className="w-32 h-12 flex justify-center items-center border-2 border-blue-300 rounded-full hover:bg-gray-50 transition-colors">
          <img src="https://cdn-icons-png.flaticon.com/512/3128/3128304.png" alt="Facebook" className="w-6 h-6" />
        </button>
        <button className="w-32 h-12 flex justify-center items-center border-2 border-blue-300 rounded-full hover:bg-gray-50 transition-colors">
          <img src="https://cdn-icons-png.flaticon.com/512/281/281764.png" alt="Google" className="w-6 h-6" />
        </button>
        <button className="w-32 h-12 flex justify-center items-center border-2 border-blue-300 rounded-full hover:bg-gray-50 transition-colors">
          <img src="https://cdn-icons-png.flaticon.com/512/0/747.png" alt="Apple" className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;