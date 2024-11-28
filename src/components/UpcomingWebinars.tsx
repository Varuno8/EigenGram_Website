'use client'
import React from 'react';
import Link from 'next/link';

function PricingPlans() {
  const pricingPlans = [
    {
      title: 'Hobby',
      price: '$99',
      duration: '/month',
      features: [
        'Access to basic analytics reports',
        'Up to 10,000 data points per month',
        'Email support',
        'Community forum access',
        'Cancel anytime',
      ],
      buttonLabel: 'Get Hobby',
    },
    {
      title: 'Starter',
      price: '$299',
      duration: '/month',
      isFeatured: true,
      features: [
        'Advanced analytics dashboard',
        'Customizable reports and charts',
        'Real-time data tracking',
        'Integration with third-party tools',
        'Everything in Hobby Plan',
      ],
      buttonLabel: 'Get Starter',
    },
    {
      title: 'Pro',
      price: '$1490',
      duration: '/month',
      features: [
        'Unlimited data storage',
        'Customizable dashboards',
        'Advanced data segmentation',
        'Real-time data processing',
        'AI-powered insights and recommendations',
        'Everything in Starter Plan',
      ],
      buttonLabel: 'Get Pro',
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen py-16 px-6 md:px-20">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Simple pricing for advanced people
        </h1>
        <p className="text-lg md:text-xl text-neutral-400">
          Our pricing is designed for advanced people who need more features and more flexibility.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className={`min-h-[500px] border rounded-lg p-6 bg-neutral-900 shadow-md ${
              plan.isFeatured ? 'border-yellow-500' : 'border-neutral-800'
            }`}
          >
            <h2 className="text-xl font-semibold mb-4">{plan.title}</h2>
            <div className="text-5xl font-bold mb-2">
              {plan.price}
              <span className="text-lg font-normal">{plan.duration}</span>
            </div>
            <button className="w-full bg-white text-black py-2 mt-6 rounded-md font-semibold hover:bg-gray-200">
              {plan.buttonLabel}
            </button>
            <ul className="mt-6 space-y-2 text-neutral-400">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center">
                  <span className="mr-2">✔️</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PricingPlans;
