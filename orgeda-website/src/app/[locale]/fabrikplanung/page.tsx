import { useLocale } from 'next-intl';
import Link from 'next/link';
import { CogIcon, ArrowsRightLeftIcon, CubeTransparentIcon, ServerStackIcon } from '@heroicons/react/24/outline';

export default function FabrikplanungPage() {
  const locale = useLocale();
  const isGerman = locale === 'de';

  const services = [
    {
      title: isGerman ? 'Fabrikkonzepte' : 'Factory Concepts',
      description: isGerman 
        ? 'Ganzheitliche Fabrikkonzepte von der Idee bis zur fertigen Planung.'
        : 'Holistic factory concepts from idea to finished planning.',
      icon: <CogIcon className="w-8 h-8" />,
    },
    {
      title: 'Layoutplanung',
      description: isGerman 
        ? 'Optimale Anordnung von Maschinen, Arbeitsplätzen und Logistikflächen.'
        : 'Optimal arrangement of machines, workstations and logistics areas.',
      icon: <CubeTransparentIcon className="w-8 h-8" />,
    },
    {
      title: isGerman ? 'Prozessplanung' : 'Process Planning',
      description: isGerman 
        ? 'Effiziente Produktionsprozesse für maximale Wertschöpfung.'
        : 'Efficient production processes for maximum value creation.',
      icon: <ArrowsRightLeftIcon className="w-8 h-8" />,
    },
    {
      title: isGerman ? 'Materialflussplanung' : 'Material Flow Planning',
      description: isGerman 
        ? 'Optimierung des Materialflusses für schlanke Produktion.'
        : 'Optimization of material flow for lean production.',
      icon: <ServerStackIcon className="w-8 h-8" />,
    },
  ];

  return (
    <div className="pt-24">
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-[#7388a6]/10 rounded-xl flex items-center justify-center">
                <CogIcon className="w-8 h-8 text-[#7388a6]" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-800">
                {isGerman ? 'Fabrikplanung' : 'Factory Planning'}<span className="text-[#7388a6]">.</span>
              </h1>
            </div>
            <p className="text-xl text-slate-600">
              {isGerman 
                ? 'Professionelle Fabrikplanung für effiziente Produktion. Von der Layoutplanung bis zum Materialfluss – wir optimieren Ihre Fertigung.'
                : 'Professional factory planning for efficient production. From layout planning to material flow – we optimize your manufacturing.'}
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
            {isGerman ? 'Fabrikplanung anfragen' : 'Request Factory Planning'}
          </h2>
          <Link href={`/${locale}/kontakt`} className="inline-flex items-center px-8 py-4 bg-white text-[#7388a6] font-semibold rounded-lg hover:bg-slate-100 transition-all">
            {isGerman ? 'Kontakt aufnehmen' : 'Get in Touch'}
          </Link>
        </div>
      </section>
    </div>
  );
}
