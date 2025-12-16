import { useTranslations, useLocale } from 'next-intl';
import ContactForm from '@/components/ContactForm';
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

export default function KontaktPage() {
  const t = useTranslations('contact');
  const tFooter = useTranslations('footer');
  const locale = useLocale();

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800">
            {t('title')}<span className="text-[#7388a6]">.</span>
          </h1>
          <p className="mt-4 text-xl text-slate-600 max-w-2xl">
            {locale === 'de' 
              ? 'Wir freuen uns auf Ihre Anfrage. Nutzen Sie das Kontaktformular oder kontaktieren Sie uns direkt.' 
              : 'We look forward to hearing from you. Use the contact form or reach out to us directly.'}
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-8">
                {locale === 'de' ? 'Schreiben Sie uns' : 'Write to us'}
              </h2>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-8">
                {locale === 'de' ? 'Kontaktdaten' : 'Contact Information'}
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl">
                  <div className="w-12 h-12 bg-[#7388a6]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPinIcon className="w-6 h-6 text-[#7388a6]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-1">
                      {locale === 'de' ? 'Adresse' : 'Address'}
                    </h3>
                    <p className="text-slate-600">
                      Orgeda GmbH<br />
                      {tFooter('address')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl">
                  <div className="w-12 h-12 bg-[#7388a6]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <PhoneIcon className="w-6 h-6 text-[#7388a6]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-1">
                      {locale === 'de' ? 'Telefon' : 'Phone'}
                    </h3>
                    <a href={`tel:${tFooter('phone').replace(/\s/g, '')}`} className="text-slate-600 hover:text-[#7388a6] transition-colors">
                      {tFooter('phone')}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl">
                  <div className="w-12 h-12 bg-[#7388a6]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <EnvelopeIcon className="w-6 h-6 text-[#7388a6]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-1">
                      E-Mail
                    </h3>
                    <a href={`mailto:${tFooter('email')}`} className="text-slate-600 hover:text-[#7388a6] transition-colors">
                      {tFooter('email')}
                    </a>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="mt-8 aspect-video bg-slate-200 rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2634.5!2d9.2844083!3d48.6543039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4799eb9cf9465e51%3A0xc0d74e7a831f7683!2sOrgeda%20GmbH!5e0!3m2!1sde!2sde!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
