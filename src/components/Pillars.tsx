export default function Pillars() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <span className="text-brand-500 text-sm font-semibold uppercase tracking-wide">
            What SendMe Offers
          </span>
          <h2 className="section-title text-center mt-2">
            Four ways SendMe simplifies your life
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">

          {/* Card 1 — Services */}
          <div id="services-card" className="bg-white p-8 rounded-3xl shadow-sm">
            <div className="bg-blue-50 rounded-2xl p-3 w-fit mb-5">
              <span className="text-2xl">🔧</span>
            </div>
            <h3 className="text-2xl font-bold text-navy-900 mb-3">
              Skilled help when you need it.
            </h3>
            <p className="text-gray-500 mb-6">
              From home repairs to professional expertise—SendMe runners and service providers are ready.
            </p>

            {/* Home & Trade */}
            <div className="mb-3">
              <p className="text-xs font-semibold text-gray-400 uppercase mb-2">Home &amp; Trade</p>
              <div className="flex flex-wrap gap-2">
                {['Electrical', 'Plumbing', 'Welding', 'Painting', 'Cleaning', 'Landscaping', 'Building & Construction'].map((item) => (
                  <span key={item} className="bg-brand-50 text-brand-700 rounded-full px-3 py-1 text-xs font-medium">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Tech & Digital */}
            <div className="mt-3 mb-3">
              <p className="text-xs font-semibold text-gray-400 uppercase mb-2">Tech &amp; Digital</p>
              <div className="flex flex-wrap gap-2">
                {['Smart-home Setup', 'Internet & TV Installation', 'Graphic Design', 'Technical Support', 'Virtual Assistance', 'Data Entry', 'Translation'].map((item) => (
                  <span key={item} className="bg-brand-50 text-brand-700 rounded-full px-3 py-1 text-xs font-medium">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Personal */}
            <div className="mt-3 mb-3">
              <p className="text-xs font-semibold text-gray-400 uppercase mb-2">Personal</p>
              <div className="flex flex-wrap gap-2">
                {['Beauty & Wellness', 'Massage & Spa', 'Laundry & Ironing', 'Car Washing', 'Tailoring', 'Tutoring'].map((item) => (
                  <span key={item} className="bg-brand-50 text-brand-700 rounded-full px-3 py-1 text-xs font-medium">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Professional */}
            <div className="mt-3">
              <p className="text-xs font-semibold text-gray-400 uppercase mb-2">Professional</p>
              <div className="flex flex-wrap gap-2">
                {['Copywriting', 'Logistics', 'Professional Consultancy', 'Appliance Repair'].map((item) => (
                  <span key={item} className="bg-brand-50 text-brand-700 rounded-full px-3 py-1 text-xs font-medium">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <a
              href="https://app.sendmeafrica.com"
              className="text-brand-500 font-semibold mt-6 inline-block hover:text-brand-600 transition-colors"
            >
              Explore Services →
            </a>
          </div>

          {/* Card 2 — Merchant Commerce */}
          <div id="merchant" className="bg-white p-8 rounded-3xl shadow-sm">
            <div className="bg-green-50 rounded-2xl p-3 w-fit mb-5">
              <span className="text-2xl">🛒</span>
            </div>
            <h3 className="text-2xl font-bold text-navy-900 mb-3">
              Discover local products. Grow African businesses.
            </h3>
            <p className="text-gray-500 mb-6">
              Shop from verified local businesses or list your products to reach customers across the region.
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {[
                'Electronics & Gadgets',
                'Accessories',
                'Fabrics & Fashion',
                'Agricultural Materials',
                'Household Products',
                'Food & Beverages',
                'Computers & Hardware',
                'Furniture & Wood',
                'Building Materials',
                'Heavy Equipment',
                'Home Appliances',
                'Health & Beauty',
                'Sports & Lifestyle',
                'Groceries',
                'Babies & Toys',
                'Industrial Materials',
              ].map((item) => (
                <span key={item} className="bg-brand-50 text-brand-700 rounded-full px-3 py-1 text-xs font-medium">
                  {item}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 items-center">
              <a
                href="https://app.sendmeafrica.com"
                className="text-brand-500 font-semibold hover:text-brand-600 transition-colors"
              >
                Shop on SendMe →
              </a>
              <a
                href="https://merchant.sendmeafrica.com"
                className="text-brand-500 font-semibold hover:text-brand-600 transition-colors"
              >
                Register Your Dduuka →
              </a>
            </div>
            <p className="text-xs text-gray-400 italic mt-3">
              *Dduuka means "shop"—a local business ready to reach more customers.
            </p>
          </div>

          {/* Card 3 — Errands */}
          <div id="errands" className="bg-white p-8 rounded-3xl shadow-sm">
            <div className="bg-yellow-50 rounded-2xl p-3 w-fit mb-5">
              <span className="text-2xl">📦</span>
            </div>
            <h3 className="text-2xl font-bold text-navy-900 mb-3">
              Your errands, handled.
            </h3>
            <p className="text-gray-500 mb-6">
              From banking runs to pharmacy pickups—send a runner to handle it while you focus on what matters.
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {[
                'School Pickup',
                'Government Drop-offs',
                'Banking Errands',
                'Printing & Binding',
                'Contract Delivery',
                'Market Purchases',
                'Spare-parts Pickup',
                'Gifts & Flowers',
                'Pharmacy Pickup',
                'Gas-cylinder Errands',
                'Dry-cleaning',
                'Chores',
                'Ticket Collection',
                'Item Returns',
              ].map((item) => (
                <span key={item} className="bg-brand-50 text-brand-700 rounded-full px-3 py-1 text-xs font-medium">
                  {item}
                </span>
              ))}
            </div>

            <a
              href="https://app.sendmeafrica.com"
              className="text-brand-500 font-semibold mt-6 inline-block hover:text-brand-600 transition-colors"
            >
              Send an Errand →
            </a>
          </div>

          {/* Card 4 — Payments */}
          <div id="finance" className="bg-white p-8 rounded-3xl shadow-sm">
            <div className="bg-purple-50 rounded-2xl p-3 w-fit mb-5">
              <span className="text-2xl">🔒</span>
            </div>
            <h3 className="text-2xl font-bold text-navy-900 mb-3">
              Payments designed for trust.
            </h3>
            <p className="text-gray-500 mb-6">
              Every transaction on SendMe is tracked, secured, and transparent—giving you peace of mind with every order.
            </p>

            <div className="mb-4">
              <div className="flex items-start gap-3 mb-4">
                <span className="text-brand-500 font-bold mt-0.5">✓</span>
                <p className="text-gray-600 text-sm">Mobile-money payments (MTN MoMo &amp; Airtel Pay supported)</p>
              </div>
              <div className="flex items-start gap-3 mb-4">
                <span className="text-brand-500 font-bold mt-0.5">✓</span>
                <p className="text-gray-600 text-sm">Secure transaction records accessible any time</p>
              </div>
              <div className="flex items-start gap-3 mb-4">
                <span className="text-brand-500 font-bold mt-0.5">✓</span>
                <div>
                  <p className="text-gray-600 text-sm font-medium">Escrow-protected orders</p>
                  <p className="text-gray-500 text-sm mt-0.5">
                    Your payment can be held securely by SendMe and released after the agreed task or delivery is completed.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 mb-4">
                <span className="text-brand-500 font-bold mt-0.5">✓</span>
                <p className="text-gray-600 text-sm">Wallet and payout capabilities for runners and merchants</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-4 text-sm text-gray-500 italic">
              Coming in future releases: expanded financial tools.
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
