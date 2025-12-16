import { useLocale } from 'next-intl';
import Link from 'next/link';
import { BuildingOffice2Icon, UserGroupIcon, ComputerDesktopIcon, TableCellsIcon } from '@heroicons/react/24/outline';

export default function BueroplanungPage() {
  const locale = useLocale();
  const isGerman = locale === 'de';

  const services = [
    {
      title: isGerman ? 'Systematische Raumplanung' : 'Systematic Space Planning',
      description: isGerman 
        ? 'Optimale Nutzung Ihrer Büroflächen durch durchdachte Raumkonzepte.'
        : 'Optimal use of your office space through well-thought-out room concepts.',
      icon: <TableCellsIcon className="w-8 h-8" />,
    },
    {
      title: isGerman ? 'Ganzheitliche Bürokonzepte' : 'Holistic Office Concepts',
      description: isGerman 
        ? 'Von der Analyse bis zur Umsetzung – wir begleiten Sie durch den gesamten Planungsprozess.'
        : 'From analysis to implementation – we accompany you through the entire planning process.',
      icon: <BuildingOffice2Icon className="w-8 h-8" />,
    },
    {
      title: 'New Work Spaces',
      description: isGerman 
        ? 'Moderne Arbeitsumgebungen für mehr Kreativität, Zusammenarbeit und Produktivität.'
        : 'Modern work environments for more creativity, collaboration and productivity.',
      icon: <UserGroupIcon className="w-8 h-8" />,
    },
    {
      title: 'Desk Sharing',
      description: isGerman 
        ? 'Flexible Arbeitsplatzkonzepte für die hybride Arbeitswelt von heute.'
        : 'Flexible workplace concepts for today\'s hybrid work world.',
      icon: <ComputerDesktopIcon className="w-8 h-8" />,
    },
  ];

  return (
    <div className="pt-24">
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-[#7388a6]/10 rounded-xl flex items-center justify-center">
                <BuildingOffice2Icon className="w-8 h-8 text-[#7388a6]" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-800">
                {isGerman ? 'Büroplanung' : 'Office Planning'}<span className="text-[#7388a6]">.</span>
              </h1>
            </div>
            <p className="text-xl text-slate-600">
              {isGerman 
                ? 'Moderne Bürokonzepte für produktives Arbeiten. Wir gestalten Arbeitsumgebungen, die Ihre Mitarbeiter motivieren und Ihre Unternehmensziele unterstützen.'
                : 'Modern office concepts for productive work. We design work environments that motivate your employees and support your business goals.'}
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
            {isGerman ? 'Büroplanung starten' : 'Start Office Planning'}
          </h2>
          <Link href={`/${locale}/kontakt`} className="inline-flex items-center px-8 py-4 bg-white text-[#7388a6] font-semibold rounded-lg hover:bg-slate-100 transition-all">
            {isGerman ? 'Kontakt aufnehmen' : 'Get in Touch'}
          </Link>
        </div>
      </section>
    </div>
  );
}
