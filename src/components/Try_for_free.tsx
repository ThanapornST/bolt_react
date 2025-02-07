import React from 'react';
import Navbar from './Try for free/Navbar';
import Hero from './Try for free/Hero';
import Features from './Try for free/Features';
import PricingPlans from './Try for free/PricingPlans';
import CreditComparison from './Try for free/CreditComparison';
import FAQ from './Try for free/FAQ';

const Try_for_free = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <Features />
      <PricingPlans />
      <CreditComparison />
      <FAQ />
    </div>
  );
};

export default Try_for_free;