import React, { useState } from 'react';
import { Download, X } from 'lucide-react';
import SuccessScreen from './SuccessScreen';


interface QRPaymentScreenProps {
  isOpen: boolean;
  onClose: () => void;
  amount: number;
  selectedPlan: {
    credits: string;
    originalCredits: string;
  };
}

function QRPaymentScreen({ isOpen, onClose, amount, selectedPlan }: QRPaymentScreenProps) {
  const [showSuccess, setShowSuccess] = useState(false);

  if (!isOpen) return null;

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = 'https://promptpay.io/0891234567.png';
    link.download = `promptpay-${amount}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleComplete = () => {
    setShowSuccess(true);
  };

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white w-[490px] rounded-3xl flex flex-col">
          <div className="flex justify-end p-4">
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
              <X size={24} />
            </button>
          </div>

          <div className="px-8 py-4 text-center">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Scan with your bank app
            </h2>
            <p className="text-gray-600 mb-6">
              or payment app
            </p>

            <div className="flex justify-center mb-6">
              <img
                src="https://promptpay.io/0891234567.png"
                alt="QR Code"
                className="w-64 h-64 border-2 border-blue-100 rounded-lg"
              />
            </div>

            <p className="text-sm text-gray-500 mb-6">
              PromptPay is supported by bank apps and payment apps such as KBank, SCB, Bangkok Bank, Krunthai Bank and Krungsri.
            </p>

            <div className="space-y-3">
              <button
                onClick={handleDownload}
                className="w-full flex items-center justify-center gap-2 bg-gray-100 text-gray-700 rounded-xl py-3 hover:bg-gray-200 transition-colors"
              >
                <Download size={20} />
                <span>Download QR</span>
              </button>
              <button
                onClick={handleComplete}
                className="w-full bg-blue-500 text-white rounded-xl py-3 hover:bg-blue-600 transition-colors"
              >
                เสร็จสิ้น
              </button>
            </div>
          </div>
        </div>
      </div>

      <SuccessScreen
        isOpen={showSuccess}
        onClose={onClose}
        plan={selectedPlan}
      />
    </>
  );
}

export default QRPaymentScreen;