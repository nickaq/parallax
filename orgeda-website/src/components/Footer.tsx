'use client';

import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function Footer() {
  const t = useTranslations('footer');
  const tNav = useTranslations('navigation');
  const locale = useLocale();

  const handleScrollTo = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    { name: tNav('brandschutz'), href: '#brandschutz' },
    { name: tNav('bueroplanung'), href: '#bueroplanung' },
    { name: tNav('fabrikplanung'), href: '#fabrikplanung' },
    { name: tNav('logistikplanung'), href: '#logistikplanung' },
    { name: tNav('innovativeTechniken'), href: '#innovative-techniken' },
  ];

  return (
    <footer className="bg-slate-800 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo & Info */}
          <div className="sm:col-span-2">
            <Link href={`/${locale}`} className="inline-block mb-4">
              <span className="text-xl sm:text-2xl font-bold">
                Orgeda<span className="text-[#7388a6]">.</span>
              </span>
            </Link>
            <p className="text-slate-300 mb-4 max-w-md text-sm sm:text-base">
              Engineering Excellence für Architektur & Bau. Wir stehen für Innovation, 
              Fortschritt und Perfektion in der Umsetzung Ihrer Projekte.
            </p>
            <div className="space-y-2 text-slate-300 text-sm sm:text-base">
              <p>{t('address')}</p>
              <p>
                <a href={`tel:${t('phone').replace(/\s/g, '')}`} className="hover:text-[#7388a6] transition-colors">
                  {t('phone')}
                </a>
              </p>
              <p>
                <a href={`mailto:${t('email')}`} className="hover:text-[#7388a6] transition-colors">
                  {t('email')}
                </a>
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              {tNav('home') === 'Home' ? 'Services' : 'Leistungen'}
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <motion.button
                    onClick={() => handleScrollTo(service.href)}
                    whileHover={{ x: 5 }}
                    className="text-slate-300 hover:text-[#7388a6] transition-colors text-left text-sm sm:text-base"
                  >
                    {service.name}
                  </motion.button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Legal
            </h3>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
              <li>
                <span className="text-slate-300 hover:text-[#7388a6] transition-colors cursor-pointer">
                  {t('impressum')}
                </span>
              </li>
              <li>
                <span className="text-slate-300 hover:text-[#7388a6] transition-colors cursor-pointer">
                  {t('datenschutz')}
                </span>
              </li>
              <li>
                <span className="text-slate-300 hover:text-[#7388a6] transition-colors cursor-pointer">
                  {t('agb')}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-slate-700 text-center text-slate-400 text-xs sm:text-sm">
          <p>{t('rights')}</p>
        </div>
      </div>
    </footer>
  );
}
