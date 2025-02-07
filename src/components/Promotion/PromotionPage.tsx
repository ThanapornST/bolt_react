import React from 'react';
import { Package } from 'lucide-react';

interface PricingTier {
  credits: number;
  bonusCredits: number;
  price: number;
}

const PromotionPage = () => {
  const pricingTiers: PricingTier[] = [
    { credits: 1000, bonusCredits: 200, price: 99 },
    { credits: 5000, bonusCredits: 500, price: 399 },
    { credits: 10000, bonusCredits: 1200, price: 699 },
    { credits: 25000, bonusCredits: 3000, price: 1599 },
  ];

  const creditConversions = [
    { words: 800, credits: 100 },
    { words: 1600, credits: 200 },
    { words: 2400, credits: 250 },
  ];

  const voiceConversions = [
    { credits: 100, words: 1000 },
    { credits: 300, words: 5000 },
    { credits: 500, words: 10000 },
  ];

  const features = [
    'รองรับไฟล์เสียงคุณภาพสูง',
    'สร้างบทยาวได้ทุกแนว ไม่ว่าจะเป็นโรแมนซ์ แฟนตาซี หรือสืบสวน',
    'แปลงเป็นเสียง AI ฟังบทยายของคุณได้ทุกที่',
    'มีรายได้จากบทยายเสียง สร้างผลงานและทำเงินไปพร้อมกัน'
  ];

  return (
    <div className="min-h-screen bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">สร้างเรื่องราวของคุณ</h1>
        <p className="text-xl mb-4">แล้วเปลี่ยนเป็นนิยายเสียงได้ในคลิกเดียว!</p>
        <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors mb-8">
          ทดลองใช้งาน
        </button>
        <div className="text-center mb-12">
          <p className="text-lg">
            🎁 เริ่มต้นฟรี! 400 คำแรก ฟรี! 🎉
          </p>
          <p>ทดลองสร้างเนื้อหาที่จะดึงดูดใจ</p>
        </div>

        <h2 className="text-2xl font-bold mb-8">ดีลพิเศษ</h2>
        <p className="text-lg mb-8">ยิ่งซื้อเยอะยิ่งได้เยอะ:</p>

        <div className="grid gap-6 mb-12">
          {pricingTiers.map((tier, index) => (
            <div key={index} className="flex items-center justify-between bg-gray-900 p-4 rounded-lg">
              <div className="flex items-center space-x-4">
                <Package className="w-6 h-6 text-blue-500" />
                <div>
                  <p className="font-semibold">{tier.credits.toLocaleString()} แต้ม</p>
                  <p className="text-sm text-gray-400">แถมฟรี {tier.bonusCredits.toLocaleString()} แต้ม !!</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <p className="font-semibold">ราคา {tier.price} บาท</p>
                <button className="bg-blue-500 px-4 py-2 rounded-full hover:bg-blue-600 transition-colors">
                  Buy
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">แพ็กเกจแต้มสำหรับสร้างเนื้อหา</h3>
            <p className="text-sm text-gray-400 mb-4">ใช้ AI ช่วยให้การเขียนบทยาวได้ง่ายขึ้น</p>
            {creditConversions.map((conversion, index) => (
              <div key={index} className="flex justify-between items-center mb-2">
                <span>📝 {conversion.words} คำ</span>
                <span>= {conversion.credits} แต้ม</span>
              </div>
            ))}
          </div>

          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">เปลี่ยนบทยายเป็นนิยายเสียง</h3>
            <p className="text-sm text-gray-400 mb-4">ใช้ AI สร้างบทยายของคุณเป็นเสียง พร้อมเลือกเสียงพากย์!</p>
            {voiceConversions.map((conversion, index) => (
              <div key={index} className="flex justify-between items-center mb-2">
                <span>🎙️ {conversion.credits} แต้ม</span>
                <span>= 🗣️ {conversion.words.toLocaleString()} คำ</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-900 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">❓ ทำไมต้องเริ่มทดลองนี่?</h3>
          <div className="text-left">
            <p className="text-blue-500 mb-2">✨ เริ่มต้นเพียง 99 บาท! ซื้อแพ็กเกจแต้มเลย!</p>
            <ul className="space-y-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionPage;