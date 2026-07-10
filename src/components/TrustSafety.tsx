export default function TrustSafety() {
  const trustIndicators = [
    { icon: "🔒", label: "Payment Tracking" },
    { icon: "📋", label: "Order Histories" },
    { icon: "👁", label: "Admin Oversight" },
    { icon: "📨", label: "Secure Messaging" },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered header */}
        <div className="text-center">
          <p className="text-brand-500 text-sm font-semibold uppercase tracking-wide">
            Safety &amp; Security
          </p>
          <h2 className="section-title text-center mt-2">Built around trust.</h2>
          <p className="mt-4 max-w-2xl mx-auto text-center text-gray-500 text-lg">
            Verification and approval processes help strengthen trust across the platform—protecting
            customers, runners, and businesses alike.
          </p>
        </div>

        {/* Three-column grid */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {/* Column 1: Verified Users */}
          <div className="bg-white p-8 rounded-3xl">
            <div className="bg-blue-50 rounded-2xl p-4 w-fit mb-6">
              <span className="text-2xl">🛡️</span>
            </div>
            <h3 className="text-xl font-bold text-navy-900">Verified Onboarding</h3>
            <p className="mt-3 text-gray-500">
              User and business onboarding with approval processes to help build a trustworthy
              platform community.
            </p>
          </div>

          {/* Column 2: Secure Transactions (highlighted) */}
          <div className="bg-navy-900 text-white p-8 rounded-3xl">
            <div className="bg-brand-500 rounded-2xl p-4 w-fit mb-6">
              <span className="text-2xl">🔐</span>
            </div>
            <h3 className="text-xl font-bold text-white">Secure Payments</h3>
            <p className="mt-3 text-gray-300">
              All transactions are tracked and recorded. Escrow-supported orders ensure your payment
              is held safely until the job is confirmed complete.
            </p>
          </div>

          {/* Column 3: Privacy */}
          <div className="bg-white p-8 rounded-3xl">
            <div className="bg-green-50 rounded-2xl p-4 w-fit mb-6">
              <span className="text-2xl">👁️‍🗨️</span>
            </div>
            <h3 className="text-xl font-bold text-navy-900">Privacy-first Communication</h3>
            <p className="mt-3 text-gray-500">
              In-app communication protects your personal contact details. Order histories and
              payment records are securely maintained.
            </p>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {trustIndicators.map(({ icon, label }) => (
            <div key={label} className="p-4 bg-white rounded-2xl shadow-sm">
              <p className="text-2xl mb-2">{icon}</p>
              <p className="text-sm text-gray-500">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
