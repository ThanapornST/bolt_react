import React from "react";
import LoginForm from "./LoginForm";
import SocialLogin from "./SocialLogin";
import { Pen, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const LoginCard = () => {
  const navigate = useNavigate();

  return (
    <div className="flex w-full h-full">
      {/* Left side - Image */}
      <div className="hidden md:block w-1/2 bg-cover bg-center" 
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1582727657635-c771002bdada?q=80&w=2070&auto=format&fit=crop')`
        }}
      />
      
      {/* Right side - Login Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 relative">
        {/* Close Button */}
        <button
          onClick={() => navigate('/')}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          <X className="w-6 h-6 text-gray-600" />
        </button>

        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Pen className="w-5 h-5" />
              <span className="text-xl font-semibold">WriteWhisper</span>
            </div>
            <h2 className="text-2xl font-bold">Welcome back!</h2>
          </div>

          <LoginForm />
          <SocialLogin />

          <div className="text-center text-sm">
            <span className="text-gray-600">Don't have an account? </span>
            <a href="/register" className="text-blue-500 hover:text-blue-600 font-medium">
              Register Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginCard;