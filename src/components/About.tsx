const cards = [
  {
    icon: '👥',
    title: 'C2C Connections',
    description: 'Consumers connect directly with each other for goods and services.',
  },
  {
    icon: '🏢',
    title: 'B2B Commerce',
    description: 'Businesses source products locally and internationally through one platform.',
  },
  {
    icon: '🤝',
    title: 'P2P Services',
    description: 'People connect with trusted runners and service providers nearby.',
  },
  {
    icon: '🌍',
    title: 'Local & Global',
    description: 'Bridging African markets with international business opportunities.',
  },
];

export default function About() {
  return (
    <section id="about" className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left column */}
          <div>
            {/* Eyebrow */}
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-brand-500 mb-4">
              About SendMe
            </span>

            {/* Headline */}
            <h2 className="section-title">
              One platform. Trusted people. Everyday possibilities.
            </h2>

            {/* Body paragraphs */}
            <p className="section-subtitle mt-6">
              SendMe is a technology platform built to simplify life across East
              Africa and the wider African continent. It connects consumers to
              consumers, businesses to businesses—including international
              businesses connecting with local suppliers—and people to trusted
              service providers and runners.
            </p>
            <p className="section-subtitle mt-4">
              From daily deliveries and grocery purchases to specialist services,
              errands, business sourcing, and short gigs, SendMe brings
              everything together in one convenient platform.
            </p>
          </div>

          {/* Right column — 2×2 card grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {cards.map((card) => (
              <div
                key={card.title}
                className="bg-gray-50 rounded-2xl p-5 flex flex-col gap-3"
              >
                <span className="text-3xl" role="img" aria-label={card.title}>
                  {card.icon}
                </span>
                <h3 className="font-semibold text-navy-900 text-base">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
