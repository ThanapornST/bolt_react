import React, { useState } from 'react';
import CheckoutModal from './CheckoutModal';

interface PricingPlan {
  credits: string;
  price: number;
  originalCredits: string;
  tag: string;
}

interface PricingPlansProps {
  plans: PricingPlan[];
}

function PricingPlans({ plans }: PricingPlansProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<PricingPlan | null>(null);

  const handleBuyClick = (plan: PricingPlan) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {plans.map((plan, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-lg p-6 relative">
            {plan.tag && (
              <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm">
                {plan.tag}
              </span>
            )}
            <div className="text-center mb-4">
              <h3 className="text-lg font-semibold">{plan.credits}</h3>
              <p className="text-gray-500 text-sm">แถมฟรี {plan.originalCredits} เครดิต</p>
              <div className="mt-4">
                <span className="text-3xl font-bold">฿{plan.price}</span>
              </div>
            </div>
            <button 
              className="w-full bg-blue-500 text-white rounded-lg py-2 hover:bg-blue-600 transition-colors"
              onClick={() => handleBuyClick(plan)}
            >
              Buy
            </button>
          </div>
        ))}
      </div>

      <CheckoutModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedPlan={selectedPlan}
      />
    </>
  );
}

export default PricingPlans;