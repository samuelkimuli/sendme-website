import { useState } from 'react';

type Tab = 'customers' | 'runners' | 'businesses';

const steps: Record<Tab, { title: string; description: string }[]> = {
  customers: [
    {
      title: 'Tell us what you need',
      description: 'Browse services, shops, and errand options on the SendMe app.',
    },
    {
      title: 'Confirm & Pay',
      description: 'Review the price, confirm the details, and pay securely with mobile money.',
    },
    {
      title: 'Runner handles it',
      description: 'A verified runner or service provider picks up and completes your task.',
    },
    {
      title: 'Track & Confirm',
      description: 'Follow progress in real time and confirm completion when satisfied.',
    },
  ],
  runners: [
    {
      title: 'Register',
      description: 'Sign up on the runner app and complete the onboarding process.',
    },
    {
      title: 'Go Online',
      description: 'Set your availability and start receiving job notifications nearby.',
    },
    {
      title: 'Accept Jobs',
      description: 'Review jobs, accept tasks that work for you, and navigate to pickup.',
    },
    {
      title: 'Earn & Grow',
      description: 'Receive distance-based payouts to your wallet and build your reputation.',
    },
  ],
  businesses: [
    {
      title: 'Register',
      description: 'Create a merchant account and set up your business profile on SendMe.',
    },
    {
      title: 'Add Products',
      description: 'List your products with prices, images, and category details.',
    },
    {
      title: 'Receive Orders',
      description: 'Get notified when customers place orders and manage them from your dashboard.',
    },
    {
      title: 'Grow & Expand',
      description: 'Reach more customers, track payments, and grow your visibility on SendMe.',
    },
  ],
};

const tabLabels: { key: Tab; label: string }[] = [
  { key: 'customers', label: 'Customers' },
  { key: 'runners', label: 'Runners' },
  { key: 'businesses', label: 'Businesses' },
];

export default function HowItWorks() {
  const [activeTab, setActiveTab] = useState<Tab>('customers');
  const activeSteps = steps[activeTab];

  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center">
          <span className="text-brand-500 text-sm font-semibold uppercase tracking-wide">
            How It Works
          </span>
          <h2 className="section-title text-center mt-2">
            Simple steps to get started
          </h2>
        </div>

        {/* Tab switcher */}
        <div className="flex gap-2 justify-center mt-8 flex-wrap">
          {tabLabels.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`rounded-full px-6 py-2.5 text-sm font-semibold transition ${
                activeTab === key
                  ? 'bg-brand-500 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="mt-12">
          <div className="flex flex-col md:flex-row gap-8 items-start justify-center">
            {activeSteps.map((step, index) => (
              <>
                <div key={step.title} className="flex-1 text-center">
                  <div className="bg-brand-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                    {index + 1}
                  </div>
                  <h3 className="font-semibold text-navy-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-500">{step.description}</p>
                </div>
                {index < activeSteps.length - 1 && (
                  <div
                    key={`arrow-${index}`}
                    className="hidden md:flex items-center text-brand-400 text-2xl flex-shrink-0 pt-3"
                  >
                    →
                  </div>
                )}
              </>
            ))}
          </div>
        </div>

        {/* CTA row */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <span className="text-gray-500">Ready to begin?</span>
          <a
            href="https://app.sendmeafrica.com"
            className="btn-primary"
          >
            Use SendMe
          </a>
          <a
            href="https://runner.sendmeafrica.com"
            className="border border-brand-500 text-brand-500 rounded-full px-6 py-2.5 text-sm font-semibold hover:bg-brand-50 transition"
          >
            Become a Runner
          </a>
          <a
            href="https://merchant.sendmeafrica.com"
            className="border border-brand-500 text-brand-500 rounded-full px-6 py-2.5 text-sm font-semibold hover:bg-brand-50 transition"
          >
            Register Business
          </a>
        </div>

      </div>
    </section>
  );
}
