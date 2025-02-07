import React, { useState, useEffect } from 'react';
import { ArrowLeft, X, Check } from 'lucide-react';
import SuccessScreen from './SuccessScreen';

interface QRPaymentScreenProps {
  isOpen: boolean;
  onClose: () => void;
  amount: number;
  selectedPlan: {
    credits: string;
    price: number;
    originalCredits: string;
  };
}

const QRPaymentScreen = ({ isOpen, onClose, amount, selectedPlan }: QRPaymentScreenProps) => {
  const [timeLeft, setTimeLeft] = useState(900); // 15 minutes in seconds
  const [showSuccess, setShowSuccess] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isOpen]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const handleCopy = () => {
    navigator.clipboard.writeText(amount.toString());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Simulate payment completion after 5 seconds
  useEffect(() => {
    if (!isOpen) return;
    
    const timer = setTimeout(() => {
      setShowSuccess(true);
    }, 5000);

    return () => clearInterval(timer);
  }, [isOpen]);

  if (!isOpen) return null;
  if (showSuccess) {
    return <SuccessScreen onClose={onClose} selectedPlan={selectedPlan} />;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-black text-white w-[490px] rounded-3xl">
        <div className="flex justify-between items-center p-6 border-b border-gray-800">
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <ArrowLeft size={24} />
          </button>
          <h2 className="text-lg font-semibold">QR Payment</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X size={24} />
          </button>
        </div>

        <div className="p-6">
          <div className="text-center mb-6">
            <div className="w-64 h-64 bg-white mx-auto mb-4 rounded-lg flex items-center justify-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg"
                alt="QR Code"
                className="w-56 h-56"
              />
            </div>
            <p className="text-gray-400">Scan QR code to pay</p>
          </div>

          <div className="bg-gray-800 rounded-xl p-4 mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-400">Amount</span>
              <div className="flex items-center">
                <span className="text-xl font-semibold mr-2">฿{amount.toFixed(2)}</span>
                <button
                  onClick={handleCopy}
                  className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
                >
                  {copied ? (
                    <Check className="w-5 h-5 text-green-500" />
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
            <div className="text-center text-gray-400">
              Time remaining: {minutes}:{seconds.toString().padStart(2, '0')}
            </div>
          </div>

          <div className="space-y-4 text-sm text-gray-400">
            <p>1. Open your banking app</p>
            <p>2. Scan the QR code</p>
            <p>3. Confirm the payment amount</p>
            <p>4. Complete the payment</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QRPaymentScreen;