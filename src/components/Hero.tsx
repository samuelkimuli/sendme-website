const trustItems = [
  'Trusted local runners',
  'Secure payments',
  'Services, shopping & errands',
  'Built for African communities',
];

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-navy-900 text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — content */}
          <div>
            {/* Badge */}
            <span className="inline-block rounded-full bg-brand-500/10 text-brand-500 text-xs font-semibold px-4 py-1.5 mb-6">
              Simplifying Life Across Africa
            </span>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
              Everything you need,
              <br />
              delivered instantly.
            </h1>

            {/* Body */}
            <p className="mt-6 text-lg text-gray-300 max-w-lg leading-relaxed">
              SendMe connects customers, trusted runners, service providers, and
              businesses across Africa—making errands, shopping, deliveries, and
              everyday services simpler.
            </p>

            {/* CTA buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://app.sendmeafrica.com"
                className="btn-primary text-base px-8 py-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                Use SendMe →
              </a>
              <a
                href="https://runner.sendmeafrica.com"
                className="btn-outline text-base px-8 py-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                Become a Runner
              </a>
            </div>

            {/* Secondary link */}
            <p className="mt-5 text-sm text-gray-400">
              For businesses:{' '}
              <a
                href="https://merchant.sendmeafrica.com"
                className="text-brand-400 hover:text-brand-300 underline underline-offset-2 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Register Your Business →
              </a>
            </p>
          </div>

          {/* Right — image */}
          <div className="flex justify-center lg:justify-end">
            <img
              src="/hero.jpg"
              alt="SendMe runners holding phones, ready to deliver"
              className="rounded-3xl object-cover shadow-2xl w-full max-h-[500px]"
              loading="eager"
            />
          </div>
        </div>

        {/* Trust strip */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <ul className="flex flex-wrap gap-6">
            {trustItems.map((item) => (
              <li
                key={item}
                className="text-gray-400 text-sm flex items-center gap-2"
              >
                <span className="text-brand-500 font-bold">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
