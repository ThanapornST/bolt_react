import React, { useState } from 'react';
import { X, CreditCard, Plus } from 'lucide-react';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  amount: number;
  pointAmount: string;
  bonusPoints: string;
}

const PaymentModal: React.FC<PaymentModalProps> = ({
  isOpen,
  onClose,
  amount,
  pointAmount,
  bonusPoints
}) => {
  const [promoCode, setPromoCode] = useState('');
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string | null>(null);

  if (!isOpen) return null;

  const savedCards = [
    { type: 'visa', name: 'Card X Credit Card', last4: '1234' },
    { type: 'visa', name: 'KTC', last4: '5678' }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
      
      <div className="relative bg-black text-white w-full max-w-md rounded-xl p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <button onClick={onClose} className="flex items-center text-gray-400 hover:text-white">
            <X className="w-6 h-6" />
            <span className="ml-2">สรุปคำสั่งซื้อ</span>
          </button>
        </div>

        {/* Order Summary */}
        <div className="space-y-4 mb-6">
          <div className="flex justify-between">
            <span>Pack {pointAmount} pt แถม {bonusPoints} pt</span>
            <span>THB {amount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-gray-400">
            <span>Subtotal</span>
            <span>THB {amount.toFixed(2)}</span>
          </div>
          <button 
            className="text-blue-500 hover:text-blue-400"
            onClick={() => {/* Handle promo code */}}
          >
            Add promotion code
          </button>
          <div className="flex justify-between text-xl font-semibold pt-4 border-t border-gray-800">
            <span>Total due</span>
            <span>THB {amount.toFixed(2)}</span>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="space-y-4">
          <h3 className="text-gray-400 mb-4">เลือกวิธีการชำระเงิน</h3>
          
          {/* QR Payment */}
          <button className="w-full flex items-center justify-between bg-gray-800 hover:bg-gray-700 p-4 rounded-lg">
            <div className="flex items-center">
              <img src="https://cdn-icons-png.flaticon.com/512/300/300221.png" className="w-6 h-6" alt="QR" />
              <span className="ml-3">QR พร้อมเพย์</span>
            </div>
          </button>

          {/* True Money */}
          <button className="w-full flex items-center justify-between bg-gray-800 hover:bg-gray-700 p-4 rounded-lg">
            <div className="flex items-center">
              <img src="https://cdn-icons-png.flaticon.com/512/349/349221.png" className="w-6 h-6" alt="Wallet" />
              <span className="ml-3">ทรูมันนี่วอลเล็ท</span>
            </div>
          </button>

          {/* Credit Cards */}
          <div className="bg-gray-800 rounded-lg overflow-hidden">
            <button 
              className="w-full flex items-center justify-between p-4 hover:bg-gray-700"
              onClick={() => setSelectedPaymentMethod('credit_card')}
            >
              <div className="flex items-center">
                <CreditCard className="w-6 h-6" />
                <span className="ml-3">บัตรเครดิต/เดบิต</span>
              </div>
            </button>
            
            {selectedPaymentMethod === 'credit_card' && (
              <div className="p-4 border-t border-gray-700">
                {savedCards.map((card, index) => (
                  <div key={index} className="flex items-center justify-between py-2">
                    <div className="flex items-center">
                      <img 
                        src="https://cdn-icons-png.flaticon.com/512/349/349221.png" 
                        className="w-6 h-6" 
                        alt={card.type}
                      />
                      <div className="ml-3">
                        <div>{card.name}</div>
                        <div className="text-sm text-gray-400">****{card.last4}</div>
                      </div>
                    </div>
                  </div>
                ))}
                <button className="flex items-center text-blue-500 hover:text-blue-400 mt-2">
                  <Plus className="w-5 h-5 mr-2" />
                  <span>เพิ่มบัตรเครดิต/เดบิต</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Buy Button */}
        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 rounded-lg mt-6">
          Buy now
        </button>
      </div>
    </div>
  );
};

export default PaymentModal;