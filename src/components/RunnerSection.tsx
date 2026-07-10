const benefits = [
  {
    icon: '📱',
    title: 'Flexible Opportunities',
    description: 'Work when you want. Accept jobs that fit your schedule and location.',
  },
  {
    icon: '💰',
    title: 'Distance-based Pricing',
    description: 'Earn fairly based on the distance and complexity of each delivery.',
  },
  {
    icon: '🗺️',
    title: 'Map Navigation',
    description: 'Built-in navigation guides you to pickup and drop-off locations.',
  },
  {
    icon: '🔔',
    title: 'Live Task Updates',
    description: 'Real-time notifications keep you informed at every step.',
  },
  {
    icon: '🏦',
    title: 'Secure Wallet Records',
    description: 'All your earnings are tracked and accessible in your runner account.',
  },
];

export default function RunnerSection() {
  return (
    <section id="runner" className="py-20 bg-navy-900 text-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left column */}
          <div>
            <span className="text-brand-500 text-sm font-semibold uppercase tracking-wide">
              For Runners
            </span>
            <h2 className="text-4xl font-bold text-white leading-tight mt-2">
              Earn by helping your community move.
            </h2>
            <p className="mt-4 text-gray-300 text-lg leading-relaxed max-w-md">
              Accept jobs, navigate to pickup and drop-off locations, receive distance-based payouts, and build your reputation on SendMe.
            </p>
            <a
              href="https://runner.sendmeafrica.com"
              className="btn-primary mt-8 inline-block"
            >
              Become a Runner →
            </a>
            <p className="mt-4 text-gray-500 text-xs italic">
              Earnings vary based on job type, distance, and availability.
            </p>
          </div>

          {/* Right column: benefits */}
          <div>
            {benefits.map((benefit) => (
              <div key={benefit.title} className="flex items-start gap-4 mb-6">
                <div className="rounded-xl bg-white/10 p-3 flex-shrink-0 w-12 h-12 flex items-center justify-center text-xl">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-white">{benefit.title}</h3>
                  <p className="text-sm text-gray-400 mt-0.5">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
