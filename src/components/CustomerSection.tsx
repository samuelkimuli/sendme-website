const features = [
  {
    icon: '🛍️',
    title: 'Shop local businesses',
    description: 'Browse verified merchants and local products.',
  },
  {
    icon: '🔧',
    title: 'Request services',
    description: 'Hire skilled professionals for home, tech, and personal needs.',
  },
  {
    icon: '📦',
    title: 'Send errands',
    description: 'Delegate tasks and errands to trusted runners nearby.',
  },
  {
    icon: '💳',
    title: 'Pay with mobile money',
    description: 'MTN MoMo and Airtel Pay accepted securely.',
  },
  {
    icon: '📍',
    title: 'Track your runner',
    description: 'Follow your delivery or service provider in real time.',
  },
  {
    icon: '🔒',
    title: 'Secure escrow',
    description: 'Payments held safely until your task is confirmed complete.',
  },
];

export default function CustomerSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: content */}
          <div>
            <span className="text-brand-500 text-sm font-semibold uppercase tracking-wide">
              For Customers
            </span>
            <h2 className="section-title mt-2">
              Life is easier with SendMe.
            </h2>
            <p className="section-subtitle mt-4">
              Order products, request services, send errands, and track deliveries—all from one place.
            </p>
            <a
              href="https://app.sendmeafrica.com"
              className="btn-primary mt-8 inline-block"
            >
              Open Customer App →
            </a>
          </div>

          {/* Right: feature cards grid */}
          <div className="grid grid-cols-2 gap-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-2xl mb-3 block">{feature.icon}</span>
                <h3 className="font-semibold text-navy-900 text-sm mb-1">{feature.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
