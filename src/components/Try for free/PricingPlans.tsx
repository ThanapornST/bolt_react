import React, { useState } from 'react';
import { Check } from 'lucide-react';
import CheckoutModal from './CheckoutModal';

const PricingPlans = () => {
  const [showCheckout, setShowCheckout] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<{
    credits: string;
    price: number;
    originalCredits: string;
  } | null>(null);

  const plans = [
    {
      credits: '500 Credits',
      originalCredits: '250 Credits',
      price: 299,
      features: [
        'AI Story Generation',
        'Character Voice Creation',
        'Export to PDF/EPUB',
        'Basic Support'
      ]
    },
    {
      credits: '1200 Credits',
      originalCredits: '600 Credits',
      price: 599,
      popular: true,
      features: [
        'Everything in Basic',
        'Priority Support',
        'Advanced AI Features',
        'Collaboration Tools'
      ]
    },
    {
      credits: '3000 Credits',
      originalCredits: '1500 Credits',
      price: 1299,
      features: [
        'Everything in Pro',
        'Custom Voice Training',
        'API Access',
        'Dedicated Support'
      ]
    }
  ];

  const handlePlanSelect = (plan: typeof plans[0]) => {
    setSelectedPlan(plan);
    setShowCheckout(true);
  };

  return (
    <>
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-600">
              Get 50% extra credits with our special launch offer
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden ${
                  plan.popular ? 'ring-2 ring-blue-500 transform scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="bg-blue-500 text-white text-center py-2 text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <div className="p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {plan.credits}
                    </h3>
                    <p className="text-gray-500">+{plan.originalCredits} Free</p>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">฿{plan.price}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="w-5 h-5 text-green-500 mr-2" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => handlePlanSelect(plan)}
                    className={`w-full py-3 rounded-lg font-semibold ${
                      plan.popular
                        ? 'bg-blue-500 text-white hover:bg-blue-600'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    } transition-colors`}
                  >
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <CheckoutModal
        isOpen={showCheckout}
        onClose={() => setShowCheckout(false)}
        selectedPlan={selectedPlan}
      />
    </>
  );
}

export default PricingPlans;