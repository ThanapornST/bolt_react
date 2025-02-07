import React from 'react';
import { Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface SuccessScreenProps {
  onClose: () => void;
  selectedPlan: {
    credits: string;
    originalCredits: string;
  };
}

const SuccessScreen = ({ onClose, selectedPlan }: SuccessScreenProps) => {
  const navigate = useNavigate();

  const handleStartWriting = () => {
    onClose();
    navigate('/create');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-black text-white w-[490px] rounded-3xl p-8 text-center">
        <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check className="w-12 h-12 text-white" />
        </div>

        <h2 className="text-2xl font-bold mb-4">Payment Successful!</h2>
        
        <div className="bg-gray-800 rounded-xl p-6 mb-6">
          <p className="text-gray-400 mb-2">Credits Added</p>
          <p className="text-2xl font-bold">{selectedPlan.credits}</p>
          <p className="text-green-500">+{selectedPlan.originalCredits} Bonus</p>
        </div>

        <p className="text-gray-400 mb-8">
          Your credits have been added to your account. You can start using them right away!
        </p>

        <div className="space-y-4">
          <button
            onClick={handleStartWriting}
            className="w-full py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors"
          >
            Start Writing
          </button>
          
          <button
            onClick={onClose}
            className="w-full py-3 bg-gray-800 text-white rounded-xl hover:bg-gray-700 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default SuccessScreen;