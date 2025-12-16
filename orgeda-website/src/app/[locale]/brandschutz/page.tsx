import { useLocale } from 'next-intl';
import Link from 'next/link';
import { ShieldCheckIcon, DocumentTextIcon, FireIcon, ClipboardDocumentListIcon } from '@heroicons/react/24/outline';

export default function BrandschutzPage() {
  const locale = useLocale();
  const isGerman = locale === 'de';

  const services = [
    {
      title: isGerman ? 'Flucht- & Rettungspläne' : 'Escape & Rescue Plans',
      description: isGerman 
        ? 'Normgerechte Erstellung von Flucht- und Rettungsplänen nach DIN ISO 23601 und ASR A2.3.'
        : 'Standard-compliant creation of escape and rescue plans according to DIN ISO 23601 and ASR A2.3.',
      icon: <DocumentTextIcon className="w-8 h-8" />,
    },
    {
      title: isGerman ? 'Feuerwehrpläne' : 'Fire Brigade Plans',
      description: isGerman 
        ? 'Erstellung von Feuerwehrplänen nach DIN 14095 für die schnelle Orientierung der Feuerwehr.'
        : 'Creation of fire brigade plans according to DIN 14095 for quick orientation of the fire department.',
      icon: <FireIcon className="w-8 h-8" />,
    },
    {
      title: isGerman ? 'Brandschutzkonzepte' : 'Fire Protection Concepts',
      description: isGerman 
        ? 'Ganzheitliche Brandschutzkonzepte für Neubauten, Umbauten und Bestandsgebäude.'
        : 'Comprehensive fire protection concepts for new buildings, renovations and existing buildings.',
      icon: <ShieldCheckIcon className="w-8 h-8" />,
    },
    {
      title: isGerman ? 'Brandschutzordnung' : 'Fire Protection Regulations',
      description: isGerman 
        ? 'Erstellung von Brandschutzordnungen Teil A, B und C nach DIN 14096.'
        : 'Creation of fire protection regulations Part A, B and C according to DIN 14096.',
      icon: <ClipboardDocumentListIcon className="w-8 h-8" />,
    },
  ];

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-[#7388a6]/10 rounded-xl flex items-center justify-center">
                <ShieldCheckIcon className="w-8 h-8 text-[#7388a6]" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-800">
                {isGerman ? 'Brandschutz' : 'Fire Safety'}<span className="text-[#7388a6]">.</span>
              </h1>
            </div>
            <p className="text-xl text-slate-600">
              {isGerman 
                ? 'Professioneller Brandschutz für Ihre Sicherheit. Wir erstellen normgerechte Flucht- und Rettungspläne, Feuerwehrpläne und entwickeln ganzheitliche Brandschutzkonzepte.'
                : 'Professional fire protection for your safety. We create standard-compliant escape and rescue plans, fire brigade plans and develop comprehensive fire protection concepts.'}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="p-8 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-[#7388a6]/10 rounded-xl flex items-center justify-center mb-6 text-[#7388a6]">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">{service.title}</h3>
                <p className="text-slate-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#7388a6]">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            {isGerman ? 'Brandschutz-Beratung anfordern' : 'Request Fire Safety Consultation'}
          </h2>
          <Link
            href={`/${locale}/kontakt`}
            className="inline-flex items-center px-8 py-4 bg-white text-[#7388a6] font-semibold rounded-lg hover:bg-slate-100 transition-all"
          >
            {isGerman ? 'Kontakt aufnehmen' : 'Get in Touch'}
          </Link>
        </div>
      </section>
    </div>
  );
}
