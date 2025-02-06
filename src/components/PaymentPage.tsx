import React, { useState, useEffect } from 'react';
import { ArrowLeft, CreditCard, Building, Wallet, Check, Lock, Shield, Gift } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

interface PaymentMethod {
  id: string;
  name: string;
  icon: React.ElementType;
  description: string;
}

interface PlanDetails {
  name: string;
  price: number;
  trialDays: number;
}

const PaymentPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedMethod, setSelectedMethod] = useState<string>('credit_card');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [name, setName] = useState('');
  const [planDetails, setPlanDetails] = useState<PlanDetails>({
    name: 'Basic',
    price: 299,
    trialDays: 7
  });

  useEffect(() => {
    // Get plan details from URL params or state
    const searchParams = new URLSearchParams(location.search);
    const plan = searchParams.get('plan');
    
    if (plan === 'pro') {
      setPlanDetails({
        name: 'Pro',
        price: 599,
        trialDays: 14
      });
    } else if (plan === 'basic') {
      setPlanDetails({
        name: 'Basic',
        price: 299,
        trialDays: 7
      });
    }
  }, [location]);

  const paymentMethods: PaymentMethod[] = [
    {
      id: 'credit_card',
      name: 'บัตรเครดิต/เดบิต',
      icon: CreditCard,
      description: 'Visa, Mastercard, JCB'
    },
    {
      id: 'bank_transfer',
      name: 'โอนผ่านธนาคาร',
      icon: Building,
      description: 'ธนาคารทั่วไป'
    },
    {
      id: 'e_wallet',
      name: 'E-Wallet',
      icon: Wallet,
      description: 'TrueMoney, Rabbit LINE Pay'
    }
  ];

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || '';
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length) {
      return parts.join(' ');
    } else {
      return value;
    }
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = formatCardNumber(e.target.value);
    setCardNumber(value);
  };

  const handleExpiryDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length >= 2) {
      value = value.slice(0, 2) + '/' + value.slice(2, 4);
    }
    setExpiryDate(value);
  };

  const calculateVAT = (price: number) => {
    return price * 0.07;
  };

  const calculateTotal = (price: number) => {
    return price + calculateVAT(price);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle payment submission
    console.log('Processing payment...');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center">
            <button
              onClick={() => navigate(-1)}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <h1 className="ml-4 text-xl font-semibold">ชำระเงิน</h1>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Trial Period Banner */}
        <div className="mb-8 bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-center">
          <Gift className="w-6 h-6 text-blue-500 mr-3" />
          <div>
            <h3 className="font-medium text-blue-900">
              ทดลองใช้งานฟรี {planDetails.trialDays} วัน
            </h3>
            <p className="text-sm text-blue-700">
              เริ่มชำระค่าบริการหลังจากสิ้นสุดระยะเวลาทดลองใช้งาน
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Payment Form */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6">
              {/* Payment Methods */}
              <div className="mb-8">
                <h2 className="text-lg font-semibold mb-4">วิธีการชำระเงิน</h2>
                <div className="space-y-4">
                  {paymentMethods.map((method) => (
                    <label
                      key={method.id}
                      className={`flex items-center p-4 border rounded-lg cursor-pointer transition-colors ${
                        selectedMethod === method.id
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-blue-200'
                      }`}
                    >
                      <input
                        type="radio"
                        name="payment_method"
                        value={method.id}
                        checked={selectedMethod === method.id}
                        onChange={(e) => setSelectedMethod(e.target.value)}
                        className="hidden"
                      />
                      <div className="flex items-center space-x-4">
                        <div className={`p-2 rounded-full ${
                          selectedMethod === method.id
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-100 text-gray-500'
                        }`}>
                          <method.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <p className="font-medium">{method.name}</p>
                          <p className="text-sm text-gray-500">{method.description}</p>
                        </div>
                      </div>
                      <div className="ml-auto">
                        {selectedMethod === method.id && (
                          <Check className="w-5 h-5 text-blue-500" />
                        )}
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Credit Card Form */}
              {selectedMethod === 'credit_card' && (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      หมายเลขบัตร
                    </label>
                    <input
                      type="text"
                      value={cardNumber}
                      onChange={handleCardNumberChange}
                      maxLength={19}
                      placeholder="0000 0000 0000 0000"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        วันหมดอายุ
                      </label>
                      <input
                        type="text"
                        value={expiryDate}
                        onChange={handleExpiryDateChange}
                        placeholder="MM/YY"
                        maxLength={5}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        CVV
                      </label>
                      <input
                        type="text"
                        value={cvv}
                        onChange={(e) => setCvv(e.target.value.replace(/\D/g, ''))}
                        placeholder="123"
                        maxLength={3}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      ชื่อบนบัตร
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="JOHN DOE"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </form>
              )}

              {/* Bank Transfer Instructions */}
              {selectedMethod === 'bank_transfer' && (
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-medium mb-2">วิธีการชำระเงิน</h3>
                    <ol className="list-decimal list-inside space-y-2 text-gray-600">
                      <li>เลือกธนาคารที่ต้องการโอน</li>
                      <li>โอนเงินตามจำนวนที่แสดง</li>
                      <li>อัพโหลดสลิปการโอนเงิน</li>
                      <li>รอการตรวจสอบและยืนยัน</li>
                    </ol>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h3 className="font-medium mb-2">บัญชีธนาคาร</h3>
                    <div className="space-y-2">
                      <p className="text-gray-600">ธนาคารกสิกรไทย</p>
                      <p className="text-lg font-medium">123-4-56789-0</p>
                      <p className="text-gray-600">บริษัท WriteWhisper จำกัด</p>
                    </div>
                  </div>
                </div>
              )}

              {/* E-Wallet Options */}
              {selectedMethod === 'e_wallet' && (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <button className="p-4 border rounded-lg hover:border-blue-500 transition-colors">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/True_Money_Wallet_Logo.svg/2560px-True_Money_Wallet_Logo.svg.png"
                        alt="TrueMoney"
                        className="h-8 mx-auto mb-2"
                      />
                      <span className="text-sm">TrueMoney Wallet</span>
                    </button>
                    <button className="p-4 border rounded-lg hover:border-blue-500 transition-colors">
                      <img
                        src="https://www.rabbitlinepay.com/assets/images/logo-white.png"
                        alt="Rabbit LINE Pay"
                        className="h-8 mx-auto mb-2"
                      />
                      <span className="text-sm">Rabbit LINE Pay</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Order Summary */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
              <h2 className="text-lg font-semibold mb-4">สรุปรายการ</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">แพ็คเกจ {planDetails.name}</span>
                  <span>฿{planDetails.price.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">ภาษีมูลค่าเพิ่ม (7%)</span>
                  <span>฿{calculateVAT(planDetails.price).toFixed(2)}</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between font-semibold">
                    <span>ยอดรวมทั้งสิ้น</span>
                    <span>฿{calculateTotal(planDetails.price).toFixed(2)}</span>
                  </div>
                  <p className="text-sm text-blue-600 mt-2">
                    เริ่มชำระหลังจากทดลองใช้งาน {planDetails.trialDays} วัน
                  </p>
                </div>
              </div>

              <button
                onClick={handleSubmit}
                className="w-full mt-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center space-x-2"
              >
                <Lock className="w-4 h-4" />
                <span>เริ่มทดลองใช้งาน</span>
              </button>

              <div className="mt-6 flex items-center justify-center space-x-2 text-sm text-gray-500">
                <Shield className="w-4 h-4" />
                <span>การชำระเงินปลอดภัยด้วย SSL</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PaymentPage;