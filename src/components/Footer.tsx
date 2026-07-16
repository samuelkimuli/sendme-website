import { SOCIAL_LINKS } from '../constants/socialLinks';
import SocialIcon from './SocialIcon';

const productLinks = [
  { label: 'Customer App', href: 'https://app.sendmeafrica.com' },
  { label: 'Runner App', href: 'https://runner.sendmeafrica.com' },
  { label: 'Merchant Portal', href: 'https://merchant.sendmeafrica.com' },
];

const companyLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Column 1 — Brand */}
          <div className="lg:col-span-2">
            {/* Wordmark */}
            <a href="#home" className="flex flex-col leading-none select-none mb-1">
              <span className="text-xl font-extrabold">
                <span className="text-white">Send</span>
                <span className="text-brand-500">Me</span>
              </span>
              <span className="text-[10px] text-gray-400 tracking-wide mt-0.5">
                Simplifying Life
              </span>
            </a>

            <p className="mt-4 text-sm text-gray-400 leading-relaxed max-w-xs">
              Connecting communities, enabling commerce, and simplifying everyday
              life across Africa.
            </p>

            <a
              href="mailto:support@sendmeafrica.com"
              className="mt-4 inline-block text-sm text-gray-400 hover:text-white transition-colors"
            >
              support@sendmeafrica.com
            </a>

            <p className="mt-1 text-sm text-gray-500">Uganda / East Africa</p>
          </div>

          {/* Column 2 — Products */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-300 mb-4">
              Products
            </h4>
            <ul>
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-white transition-colors block mb-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Company */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-300 mb-4">
              Company
            </h4>
            <ul>
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-white transition-colors block mb-2"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Legal */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-300 mb-4">
              Legal
            </h4>
            <ul>
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-white transition-colors block mb-2"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5 — Get Started */}
          <div className="lg:col-start-5">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-300 mb-4">
              Get Started
            </h4>
            <a
              href="https://app.sendmeafrica.com"
              className="btn-primary block text-center mb-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              Use SendMe
            </a>
            <a
              href="https://merchant.sendmeafrica.com"
              className="block text-center text-sm font-medium px-4 py-2 rounded-lg border border-gray-600 text-gray-300 hover:bg-gray-800 transition-colors duration-150"
              target="_blank"
              rel="noopener noreferrer"
            >
              Register Your Business
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 SendMe Africa. All rights reserved.
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.ariaLabel}
                title={link.ariaLabel}
                className="text-gray-500 transition-colors duration-150 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/50 rounded"
              >
                <SocialIcon name={link.name} size={18} />
              </a>
            ))}
          </div>

          <p className="text-brand-500 text-sm font-medium">
            Built in Uganda for Africa
          </p>
        </div>
      </div>
    </footer>
  );
}
