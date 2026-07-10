export default function MerchantSection() {
  const benefits = [
    "Online product catalogue visible to SendMe customers",
    "Wider business visibility across the platform",
    "Order management and status tracking",
    "Flexible pickup location selection",
    "Transparent payment records",
    "Promotional opportunities and future influencer campaigns",
  ];

  return (
    <section id="merchant" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <div className="relative">
            <img
              src="/merchant.jpg"
              alt="A child encouraging a shop owner to register their Dduuka on SendMe"
              className="rounded-3xl shadow-2xl w-full object-cover max-h-[520px]"
              loading="lazy"
            />
            <div className="absolute -bottom-6 -right-6 bg-brand-500 text-white rounded-2xl p-6 shadow-xl hidden lg:block">
              <p className="text-2xl font-bold">Dduuka</p>
              <p className="text-brand-100 text-sm mt-1">Reach more customers</p>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <p className="text-brand-500 text-sm font-semibold uppercase tracking-wide">
              For Businesses
            </p>
            <h2 className="section-title mt-2">Put your Dduuka on the map.</h2>
            <p className="mt-4 text-gray-500 text-lg leading-relaxed">
              Bring your shop, products, and services online. Reach new customers, manage orders,
              choose pickup locations, and grow through SendMe.
            </p>
            <p className="mt-3 bg-brand-50 rounded-xl px-4 py-3 text-sm text-brand-700 italic">
              "Dduuka means shop—a local business ready to reach more customers."
            </p>

            {/* Benefits list */}
            <ul className="mt-8 space-y-3">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3">
                  <span className="bg-brand-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs flex-shrink-0">
                    ✓
                  </span>
                  <span className="text-gray-700 text-sm">{benefit}</span>
                </li>
              ))}
            </ul>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="https://merchant.sendmeafrica.com" className="btn-primary">
                Register Your Business →
              </a>
              <a
                href="https://merchant.sendmeafrica.com"
                className="rounded-full border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-600 hover:border-brand-500 hover:text-brand-500 transition"
              >
                Merchant Login
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
