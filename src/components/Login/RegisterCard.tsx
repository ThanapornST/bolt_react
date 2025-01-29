import React from 'react';
import RegisterForm from './RegisterForm';
import SocialLogin from './SocialLogin';
// import { Pen } from 'lucide-react';
import { Link } from 'react-router-dom';

const RegisterCard = () => {
  return (
    <div className="w-full max-w-md">
      <div className="flex items-center gap-2 mb-6">
      </div>
      <h2 className="text-2xl font-bold mb-2">Hello!</h2>
      <h2 className="text-2xl font-bold mb-2">Register to get started</h2>
      <RegisterForm />
      <div className="mt-6">
        <SocialLogin />
      </div>
      <div className="mt-6 text-center text-sm">
        <span className="text-lg font-bold text-black-600">Do have an account? </span>
        <Link to="/login" className="text-lg font-bold text-blue-500 hover:text-blue-600 font-semibold">
          Login now
        </Link>
      </div>
    </div>
  );
};

export default RegisterCard;