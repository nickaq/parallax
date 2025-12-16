import { useLocale } from 'next-intl';
import Link from 'next/link';
import { TruckIcon, ArchiveBoxIcon, MapIcon, ChartBarIcon } from '@heroicons/react/24/outline';

export default function LogistikplanungPage() {
  const locale = useLocale();
  const isGerman = locale === 'de';

  const services = [
    {
      title: isGerman ? 'Ganzheitliche Logistikkonzepte' : 'Comprehensive Logistics Concepts',
      description: isGerman 
        ? 'Von der Analyse bis zur Implementierung – durchdachte Logistiklösungen für Ihr Unternehmen.'
        : 'From analysis to implementation – well-thought-out logistics solutions for your company.',
      icon: <TruckIcon className="w-8 h-8" />,
    },
    {
      title: isGerman ? 'Lagerplanung' : 'Warehouse Planning',
      description: isGerman 
        ? 'Effiziente Lagerlayouts für optimale Raumnutzung und schnelle Prozesse.'
        : 'Efficient warehouse layouts for optimal space utilization and fast processes.',
      icon: <ArchiveBoxIcon className="w-8 h-8" />,
    },
    {
      title: isGerman ? 'Intralogistik' : 'Intralogistics',
      description: isGerman 
        ? 'Optimierung innerbetrieblicher Material- und Informationsflüsse.'
        : 'Optimization of internal material and information flows.',
      icon: <MapIcon className="w-8 h-8" />,
    },
    {
      title: 'BIM in der Logistikplanung',
      description: isGerman 
        ? 'Building Information Modeling für präzise und effiziente Logistikplanung.'
        : 'Building Information Modeling for precise and efficient logistics planning.',
      icon: <ChartBarIcon className="w-8 h-8" />,
    },
  ];

  return (
    <div className="pt-24">
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-[#7388a6]/10 rounded-xl flex items-center justify-center">
                <TruckIcon className="w-8 h-8 text-[#7388a6]" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-800">
                {isGerman ? 'Logistikplanung' : 'Logistics Planning'}<span className="text-[#7388a6]">.</span>
              </h1>
            </div>
            <p className="text-xl text-slate-600">
              {isGerman 
                ? 'Effiziente Logistiklösungen für Ihr Unternehmen. Wir planen optimale Lager- und Logistikkonzepte für reibungslose Abläufe.'
                : 'Efficient logistics solutions for your company. We plan optimal warehouse and logistics concepts for smooth operations.'}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="p-8 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-shadow">
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

      <section className="py-16 bg-[#7388a6]">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            {isGerman ? 'Logistikberatung starten' : 'Start Logistics Consultation'}
          </h2>
          <Link href={`/${locale}/kontakt`} className="inline-flex items-center px-8 py-4 bg-white text-[#7388a6] font-semibold rounded-lg hover:bg-slate-100 transition-all">
            {isGerman ? 'Kontakt aufnehmen' : 'Get in Touch'}
          </Link>
        </div>
      </section>
    </div>
  );
}
