import React from 'react';
import { Check, X } from 'lucide-react';

const CreditComparison = () => {
  const features = [
    {
      name: 'AI Story Generation',
      credits: 10,
      description: 'Generate a chapter with AI assistance'
    },
    {
      name: 'Character Voice Creation',
      credits: 20,
      description: 'Create unique voice for one character'
    },
    {
      name: 'Plot Development',
      credits: 5,
      description: 'Get AI suggestions for plot development'
    },
    {
      name: 'Character Development',
      credits: 5,
      description: 'Generate character backstories and traits'
    },
    {
      name: 'Scene Description',
      credits: 3,
      description: 'Generate detailed scene descriptions'
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Credit Usage Guide
          </h2>
          <p className="text-xl text-gray-600">
            Understand how credits work for different features
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Feature</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Credits</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {features.map((feature, index) => (
                <tr key={index}>
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-900">{feature.name}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900">{feature.credits} credits</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-500">{feature.description}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CreditComparison;