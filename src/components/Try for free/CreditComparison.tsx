import React from 'react';
import { Check } from 'lucide-react';

interface CreditConversion {
  input: string;
  output: string;
}

interface WordConversion {
  words: string;
  price: string;
}

interface CreditComparisonProps {
  creditConversion: CreditConversion[];
  wordConversion: WordConversion[];
}

function CreditComparison({ creditConversion, wordConversion }: CreditComparisonProps) {
  return (
    <div className="grid md:grid-cols-2 gap-12 mb-16">
      <div className="bg-black text-white p-8 rounded-2xl">
        <div className="flex flex-col items-center text-center">
          <h3 className="text-xl font-semibold mb-4">แพ็คเกจเครดิตสำหรับนักเขียน</h3>
          <div className="space-y-3">
            {creditConversion.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <Check size={20} className="text-green-400" />
                <span>{item.input} = {item.output}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-black text-white p-8 rounded-2xl">
        <div className="flex flex-col items-center text-center">
          <h3 className="text-xl font-semibold mb-4">เปรียบเทียบเครดิตเทียบเท่า</h3>
          <div className="space-y-3">
            {wordConversion.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <Check size={20} className="text-green-400" />
                <span>{item.words} = {item.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreditComparison;