import { SOCIAL_LINKS } from '../constants/socialLinks';
import SocialIcon from './SocialIcon';

export default function SocialFollow() {
  return (
    <section id="social" className="py-20 lg:py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-brand-500 mb-3">
          Community
        </p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900">
          Follow SendMe Africa
        </h2>
        <p className="mt-4 text-base sm:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Stay connected for new merchants, product offers, runner opportunities and updates from across Africa.
        </p>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.ariaLabel}
              className="group flex flex-col items-center gap-3 rounded-2xl border border-gray-200 bg-white px-4 py-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-brand-500 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
            >
              <span className="text-gray-400 transition-colors duration-200 group-hover:text-brand-500">
                <SocialIcon name={link.name} size={28} />
              </span>
              <span className="text-xs font-semibold text-navy-900">{link.name}</span>
              <span className="text-[11px] text-gray-400 leading-tight break-all">{link.handle}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
