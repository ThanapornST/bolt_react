import React from 'react';
import { Check } from 'lucide-react';

interface FeaturesProps {
  features: string[];
}

function Features({ features }: FeaturesProps) {
  return (
    <div className="bg-white rounded-2xl p-8 mb-16">
      <h3 className="text-xl font-semibold mb-6">ทำไมใช้เครดิตถึงดีกว่า?</h3>
      <div className="grid gap-4">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-4">
            <Check className="text-green-500 mt-1" size={20} />
            <span>{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;