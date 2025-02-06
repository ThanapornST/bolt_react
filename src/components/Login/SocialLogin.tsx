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
      
      <div className="grid grid-cols-3 gap-3">
        <button className="flex justify-center items-center px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/124/124010.png" 
            alt="Facebook" 
            className="w-6 h-6"
          />
        </button>
        <button className="flex justify-center items-center px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png" 
            alt="Google" 
            className="w-6 h-6"
          />
        </button>
        <button className="flex justify-center items-center px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/0/747.png" 
            alt="Apple" 
            className="w-6 h-6"
          />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;