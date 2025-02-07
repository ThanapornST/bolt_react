import React from 'react';
import { Check, ArrowRight, Crown, Zap, Star, ArrowLeft, Sparkles } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const features = {
  free: [
    'สร้างนิยายได้ 1 เรื่อง',
    'เสียงตัวละครพื้นฐาน 2 เสียง',
    'AI ช่วยเขียน 400 แต้ม',
    'พื้นที่เก็บไฟล์ 100MB',
    'ส่งออกไฟล์ MP3 คุณภาพพื้นฐาน'
  ],
  basic: [
    'สร้างนิยายได้ไม่จำกัด',
    'เสียงตัวละครพื้นฐาน 5 เสียง',
    'AI ช่วยเขียน 1000 แต้ม',
    'พื้นที่เก็บไฟล์ 1GB',
    'ส่งออกไฟล์ MP3'
  ],
  pro: [
    'ทุกฟีเจอร์จากแพ็คเกจ Basic',
    'เสียงตัวละครพรีเมียม 20 เสียง',
    'AI ช่วยเขียนไม่จำกัด',
    'พื้นที่เก็บไฟล์ 10GB',
    'ส่งออกไฟล์คุณภาพสูง',
    'ไม่มีโฆษณา',
    'การสนับสนุนระดับพรีเมียม'
  ],
  enterprise: [
    'ทุกฟีเจอร์จากแพ็คเกจ Pro',
    'เสียงตัวละครแบบกำหนดเอง',
    'API สำหรับนักพัฒนา',
    'พื้นที่เก็บไฟล์ไม่จำกัด',
    'การฝึกอบรมส่วนตัว',
    'ผู้จัดการบัญชีส่วนตัว',
    'SLA การสนับสนุน 24/7'
  ]
};

const PricingPage = () => {
  const navigate = useNavigate();

  const handleStartTrial = (plan: string, price: number, trialDays: number) => {
    navigate(`/payment?plan=${plan}&price=${price}&trial=${trialDays}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Back Button */}
      <div className="absolute top-6 left-6">
        <button
          onClick={() => navigate('/')}
          className="flex items-center space-x-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>กลับหน้าหลัก</span>
        </button>
      </div>

      {/* Header */}
      <header className="pt-16 pb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          เริ่มต้นสร้างนิยายของคุณวันนี้
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          เลือกแพ็คเกจที่เหมาะกับคุณ และเริ่มต้นการเดินทางสู่การเป็นนักเขียนมืออาชีพ
        </p>
      </header>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Free Plan */}
          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-green-500 transition-all duration-300">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold">Free</h3>
                <p className="text-gray-400 mt-1">เริ่มต้นฟรี</p>
              </div>
              <Sparkles className="w-8 h-8 text-green-400" />
            </div>
            <div className="mb-6">
              <span className="text-4xl font-bold">฿0</span>
              <span className="text-gray-400">/ตลอดชีพ</span>
            </div>
            <ul className="space-y-4 mb-8">
              {features.free.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Check className="w-5 h-5 text-green-400 mr-3 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/register"
              className="block w-full py-3 px-6 text-center bg-green-500 hover:bg-green-600 rounded-lg font-semibold transition-colors"
            >
              เริ่มต้นใช้งานฟรี
            </Link>
          </div>

          {/* Basic Plan */}
          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold">Basic</h3>
                <p className="text-gray-400 mt-1">สำหรับผู้เริ่มต้น</p>
              </div>
              <Zap className="w-8 h-8 text-blue-400" />
            </div>
            <div className="mb-6">
              <span className="text-4xl font-bold">฿99</span>
              <span className="text-gray-400">/เดือน</span>
            </div>
            <ul className="space-y-4 mb-8">
              {features.basic.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Check className="w-5 h-5 text-blue-400 mr-3 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => handleStartTrial('basic', 299, 7)}
              className="block w-full py-3 px-6 text-center bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transition-colors"
            >
              เริ่มต้นใช้งานฟรี 7 วัน
            </button>
          </div>

          {/* Pro Plan */}
          <div className="bg-gradient-to-b from-blue-900 to-blue-800 rounded-2xl p-8 border-2 border-blue-400 transform hover:scale-105 transition-all duration-300 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
              แนะนำ
            </div>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold">Pro</h3>
                <p className="text-blue-200 mt-1">สำหรับนักเขียนจริงจัง</p>
              </div>
              <Crown className="w-8 h-8 text-yellow-400" />
            </div>
            <div className="mb-6">
              <span className="text-4xl font-bold">฿399</span>
              <span className="text-blue-200">/เดือน</span>
            </div>
            <ul className="space-y-4 mb-8">
              {features.pro.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Check className="w-5 h-5 text-blue-300 mr-3 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => handleStartTrial('pro', 599, 14)}
              className="block w-full py-3 px-6 text-center bg-blue-400 hover:bg-blue-500 rounded-lg font-semibold transition-colors"
            >
              เริ่มต้นใช้งานฟรี 14 วัน
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-purple-500 transition-all duration-300">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold">Enterprise</h3>
                <p className="text-gray-400 mt-1">สำหรับองค์กร</p>
              </div>
              <Star className="w-8 h-8 text-purple-400" />
            </div>
            <div className="mb-6">
              <span className="text-4xl font-bold">฿699</span>
              <span className="text-gray-400">/เดือน</span>
            </div>
            <ul className="space-y-4 mb-8">
              {features.enterprise.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Check className="w-5 h-5 text-purple-400 mr-3 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button className="w-full py-3 px-6 text-center bg-gray-700 hover:bg-gray-600 rounded-lg font-semibold transition-colors flex items-center justify-center">
              <span>ติดต่อฝ่ายขาย</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center mb-12">คำถามที่พบบ่อย</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">ทดลองใช้งานฟรีทำอย่างไร?</h3>
              <p className="text-gray-300">
                คุณสามารถเริ่มต้นใช้งานฟรีได้ทันทีโดยการลงทะเบียน ไม่จำเป็นต้องใส่ข้อมูลบัตรเครดิต
              </p>
            </div>
            <div className="bg-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">ยกเลิกการสมัครได้เมื่อไหร่?</h3>
              <p className="text-gray-300">
                คุณสามารถยกเลิกการสมัครได้ทุกเมื่อ โดยไม่มีค่าใช้จ่ายเพิ่มเติม
              </p>
            </div>
            <div className="bg-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">มีส่วนลดสำหรับการชำระรายปีไหม?</h3>
              <p className="text-gray-300">
                ใช่ คุณจะได้รับส่วนลด 20% เมื่อเลือกชำระแบบรายปี
              </p>
            </div>
            <div className="bg-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">รองรับการชำระเงินแบบไหนบ้าง?</h3>
              <p className="text-gray-300">
                รองรับบัตรเครดิต/เดบิต, PayPal, และการโอนเงินผ่านธนาคาร
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;