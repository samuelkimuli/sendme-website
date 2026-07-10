export default function RegionalVision() {
  const timelineItems = [
    {
      dotClass: "bg-brand-500",
      text: "🇺🇬 Uganda — Launch market. Connecting communities, businesses, and runners across Uganda today.",
      muted: false,
    },
    {
      dotClass: "bg-brand-400",
      text: "🌍 East Africa — Growing. Expanding reach to support trade and services across the region.",
      muted: false,
    },
    {
      dotClass: "bg-gray-500",
      text: "🌐 Africa — The vision. Building infrastructure for opportunity across the continent. (Future expansion)",
      muted: true,
    },
  ];

  const locationRows = [
    {
      flag: "🇺🇬",
      title: "Uganda",
      subtitle: "Launch market",
      badge: "Active",
      badgeClass: "bg-brand-500/20 text-brand-400",
    },
    {
      flag: "🌍",
      title: "East Africa",
      subtitle: "Regional expansion",
      badge: "Growing",
      badgeClass: "bg-blue-500/20 text-blue-400",
    },
    {
      flag: "🌐",
      title: "Africa",
      subtitle: "Continental vision",
      badge: "Coming Soon",
      badgeClass: "bg-gray-500/20 text-gray-400",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <p className="text-brand-500 text-sm font-semibold uppercase tracking-wide">
              Our Vision
            </p>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight mt-4">
              Built in Africa.
              <br />
              Designed to connect Africa.
            </h2>
            <p className="mt-6 text-gray-300 text-lg max-w-lg leading-relaxed">
              SendMe begins with the everyday needs of African communities and businesses, while
              building infrastructure that can support trade, services, jobs, and opportunity across
              the continent.
            </p>

            {/* Timeline */}
            <ul className="mt-10 space-y-6">
              {timelineItems.map(({ dotClass, text, muted }) => (
                <li key={text} className="flex items-start gap-4">
                  <span
                    className={`w-3 h-3 rounded-full flex-shrink-0 mt-1.5 ${dotClass}`}
                  />
                  <span className={muted ? "text-gray-500 italic" : "text-gray-300"}>
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Decorative card */}
          <div className="bg-white/5 rounded-3xl p-8 border border-white/10">
            {locationRows.map(({ flag, title, subtitle, badge, badgeClass }) => (
              <div
                key={title}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 mb-4 last:mb-0"
              >
                <span className="text-3xl">{flag}</span>
                <div className="flex-1">
                  <p className="text-gray-300 font-semibold">{title}</p>
                  <p className="text-gray-500 text-sm">{subtitle}</p>
                </div>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${badgeClass}`}
                >
                  {badge}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
