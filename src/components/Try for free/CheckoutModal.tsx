import React, { useState } from 'react';
import { X, ArrowLeft, CreditCard, QrCode, Building2 } from 'lucide-react';
import QRPaymentScreen from './QRPaymentScreen';


interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan: {
    credits: string;
    price: number;
    originalCredits: string;
  } | null;
}

function CheckoutModal({ isOpen, onClose, selectedPlan }: CheckoutModalProps) {
  if (!isOpen || !selectedPlan) return null;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [selectedPayment, setSelectedPayment] = React.useState<string>('credit-card');
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [promoCode, setPromoCode] = React.useState('');
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [showQRScreen, setShowQRScreen] = useState(false);

  const handleBuyNow = () => {
    if (selectedPayment === 'qr') {
      setShowQRScreen(true);
    }
    // Handle other payment methods here
  };

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-black text-white w-[490px] h-[690px] rounded-3xl flex flex-col">
          <div className="flex justify-between items-center p-6 border-b border-gray-800">
            <button onClick={onClose} className="text-gray-400 hover:text-white">
              <ArrowLeft size={24} />
            </button>
            <h2 className="text-lg font-semibold">สรุปคำสั่งซื้อ</h2>
            <button onClick={onClose} className="text-gray-400 hover:text-white">
              <X size={24} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-4">
            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center">
                <div>
                  <p>{selectedPlan.credits} แถม {selectedPlan.originalCredits}</p>
                </div>
                <p>THB {selectedPlan.price.toFixed(2)}</p>
              </div>

              <div className="flex justify-between items-center">
                <p>Subtotal</p>
                <p>THB {selectedPlan.price.toFixed(2)}</p>
              </div>

              <div className="relative">
                <input
                  type="text"
                  placeholder="Add promotion code"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="w-full bg-transparent border-b border-gray-600 py-2 text-white placeholder-blue-500 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-gray-700">
                <p className="text-lg font-semibold">Total due</p>
                <p className="text-lg font-semibold">THB {selectedPlan.price.toFixed(2)}</p>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg mb-4">เลือกวิธีการชำระเงิน</h3>
              
              <button
                onClick={() => setSelectedPayment('qr')}
                className={`w-full flex items-center justify-between p-4 rounded-xl ${
                  selectedPayment === 'qr' ? 'bg-gray-700' : 'bg-gray-800'
                }`}
              >
                <div className="flex items-center gap-3">
                  <QrCode size={24} />
                  <span>QR พร้อมเพย์</span>
                </div>
                <div className="w-5 h-5 rounded-full border-2 border-gray-400 flex items-center justify-center">
                  {selectedPayment === 'qr' && <div className="w-3 h-3 rounded-full bg-blue-500"></div>}
                </div>
              </button>

              <button
                onClick={() => setSelectedPayment('truemoney')}
                className={`w-full flex items-center justify-between p-4 rounded-xl ${
                  selectedPayment === 'truemoney' ? 'bg-gray-700' : 'bg-gray-800'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Building2 size={24} />
                  <span>ทรูมันนี่วอลเล็ต</span>
                </div>
                <div className="w-5 h-5 rounded-full border-2 border-gray-400 flex items-center justify-center">
                  {selectedPayment === 'truemoney' && <div className="w-3 h-3 rounded-full bg-blue-500"></div>}
                </div>
              </button>

              <div className={`${selectedPayment === 'credit-card' ? 'bg-gray-700' : 'bg-gray-800'} rounded-xl p-4`}>
                <button
                  onClick={() => setSelectedPayment('credit-card')}
                  className="w-full flex items-center justify-between mb-4"
                >
                  <div className="flex items-center gap-3">
                    <CreditCard size={24} />
                    <span>บัตรเครดิต/เดบิต</span>
                  </div>
                  <div className="w-5 h-5 rounded-full border-2 border-gray-400 flex items-center justify-center">
                    {selectedPayment === 'credit-card' && <div className="w-3 h-3 rounded-full bg-blue-500"></div>}
                  </div>
                </button>
                
                {selectedPayment === 'credit-card' && (
                  <div className="space-y-2 pl-9">
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <span>Card X Credit Card</span>
                      <span>****1234</span>
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <span>KTC</span>
                      <span>****5678</span>
                    </div>
                    <button className="text-blue-500 text-sm hover:text-blue-400">
                      + เพิ่มบัตรเครดิต/เดบิต
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="p-6 border-t border-gray-800">
            <button 
              onClick={handleBuyNow}
              className="w-full bg-blue-500 text-white rounded-xl py-4 font-semibold hover:bg-blue-600 transition-colors"
            >
              Buy now
            </button>
          </div>
        </div>
      </div>

      <QRPaymentScreen
        isOpen={showQRScreen}
        onClose={onClose}
        amount={selectedPlan.price}
        selectedPlan={selectedPlan}
      />
    </>
  );
}

export default CheckoutModal;