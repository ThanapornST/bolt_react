import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface SuccessScreenProps {
  isOpen: boolean;
  onClose: () => void;
  plan: {
    credits: string;
    originalCredits: string;
  };
}

function SuccessScreen({ isOpen, onClose, plan }: SuccessScreenProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-[490px] rounded-3xl p-8 text-center">
        <div className="flex justify-center mb-6">
          <CheckCircle2 size={80} className="text-green-500" />
        </div>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          ชำระเงินสำเร็จ!
        </h2>

        <div className="bg-blue-50 rounded-2xl p-6 mb-8">
          <p className="text-lg text-gray-800 mb-2">
            คุณได้รับ {plan.credits}
          </p>
          <p className="text-blue-600 font-semibold">
            + โบนัสพิเศษ {plan.originalCredits}
          </p>
        </div>

        <div className="flex justify-center space-x-4">
          <img 
            src="https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
            alt="Points"
            className="w-16 h-16 rounded-full object-cover"
          />
          <img 
            src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
            alt="Points"
            className="w-16 h-16 rounded-full object-cover"
          />
          <img 
            src="https://images.unsplash.com/photo-1474631245212-32dc3c8310c6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
            alt="Points"
            className="w-16 h-16 rounded-full object-cover"
          />
        </div>

        <button
          onClick={onClose}
          className="w-full bg-blue-500 text-white rounded-xl py-3 mt-8 hover:bg-blue-600 transition-colors"
        >
          เริ่มต้นใช้งาน
        </button>
      </div>
    </div>
  );
}

export default SuccessScreen;