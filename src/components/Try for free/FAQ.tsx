import React from 'react';
import { HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  faqs: FAQItem[];
}

function FAQ({ faqs }: FAQProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-2xl font-semibold text-center mb-8">Frequently asked questions</h3>
      {faqs.map((faq, index) => (
        <div key={index} className="bg-white rounded-xl p-6">
          <div className="flex items-center gap-4">
            <HelpCircle className="text-blue-500" size={24} />
            <h4 className="font-semibold">{faq.question}</h4>
          </div>
          <p className="mt-2 text-gray-600 ml-10">{faq.answer}</p>
        </div>
      ))}
    </div>
  );
}

export default FAQ;