import React from 'react';
import Navbar from './HomePage/Navbar';
import PricingPlans from './Try for free/PricingPlans';
import Hero from './Try for free/Hero';
import CreditComparison from './Try for free/CreditComparison';
import Features from './Try for free/Features';
import FAQ from './Try for free/FAQ';


function App() {
  const pricingPlans = [
    { credits: '1,000 เครดิต', price: 99, originalCredits: '200', tag: 'แนะนำ' },
    { credits: '5,000 เครดิต', price: 399, originalCredits: '500', tag: '' },
    { credits: '10,000 เครดิต', price: 699, originalCredits: '1,500', tag: '' },
    { credits: '25,000 เครดิต', price: 1599, originalCredits: '3,000', tag: '' },
  ];

  const features = [
    'รองรับทั้งเว็บและทุกแพลตฟอร์ม',
    'สร้างนิยายได้ทุกแนว ไร้ข้อจำกัดเนื้อหา แต่งนิยาย หรือฟิคชั่นวาย',
    'แก้ไขได้ไม่จำกัด AI พร้อมช่วยออกความคิดใหม่ๆ',
    'ประกันความพึงพอใจ สร้างผลงานและสร้างรายได้ของคุณเอง'
  ];

  const creditConversion = [
    { input: '800 คำ', output: '100 เครดิต' },
    { input: '1,600 คำ', output: '200 เครดิต' },
    { input: '2,400 คำ', output: '250 เครดิต' }
  ];

  const wordConversion = [
    { words: '100 เครดิต', price: '1,000 คำ' },
    { words: '300 เครดิต', price: '5,000 คำ' },
    { words: '500 เครดิต', price: '10,000 คำ' }
  ];

  const faqs = [
    {
      question: 'Can I pause my subscription?',
      answer: 'Yes, you can pause your subscription up to one day before your next billing date.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept MasterCard, credit and debit cards, and TrueMoney Wallet.'
    },
    {
      question: 'Can I try the service before paying?',
      answer: 'Yes! Try a free 2,000 free credits in your first use.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <Hero />
        <PricingPlans plans={pricingPlans} />
        <CreditComparison 
          creditConversion={creditConversion}
          wordConversion={wordConversion}
        />
        <Features features={features} />
        <FAQ faqs={faqs} />
      </div>
    </div>
  );
}

export default App;