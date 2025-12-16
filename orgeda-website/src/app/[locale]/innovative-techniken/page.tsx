import { useLocale } from 'next-intl';
import Link from 'next/link';
import { CpuChipIcon, CubeIcon, CameraIcon, PrinterIcon } from '@heroicons/react/24/outline';

export default function InnovativeTechnikenPage() {
  const locale = useLocale();
  const isGerman = locale === 'de';

  const technologies = [
    {
      title: 'Augmented Reality',
      description: isGerman 
        ? 'Mittels HoloLens können wir Ihnen Planungen realitätsnah präsentieren. Erleben Sie Ihre Projekte virtuell vor der Umsetzung.'
        : 'Using HoloLens, we can present planning in a realistic way. Experience your projects virtually before implementation.',
      icon: <CubeIcon className="w-8 h-8" />,
    },
    {
      title: isGerman ? 'Drohnenvermessung' : 'Drone Surveying',
      description: isGerman 
        ? 'Moderne Drohnentechnik für präzise Gebäudevermessung ohne Risiken. Ideal für schwer zugängliche Bereiche und große Gebäudekomplexe.'
        : 'Modern drone technology for precise building surveying without risks. Ideal for hard-to-reach areas and large building complexes.',
      icon: <CameraIcon className="w-8 h-8" />,
    },
    {
      title: '3D-Laserscanning',
      description: isGerman 
        ? 'Hochpräzise 3D-Vermessung mit bis zu 1 Million Messpunkten pro Sekunde. Perfekt für BIM-Modelle und Bestandsdokumentation.'
        : 'High-precision 3D surveying with up to 1 million measurement points per second. Perfect for BIM models and inventory documentation.',
      icon: <CpuChipIcon className="w-8 h-8" />,
    },
    {
      title: '3D-Druck',
      description: isGerman 
        ? 'Detailgetreue Architekturmodelle aus dem 3D-Drucker. Visualisieren Sie Ihre Projekte in physischer Form.'
        : 'Detailed architectural models from the 3D printer. Visualize your projects in physical form.',
      icon: <PrinterIcon className="w-8 h-8" />,
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
                <CpuChipIcon className="w-8 h-8 text-[#7388a6]" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-800">
                {isGerman ? 'Innovative Techniken' : 'Innovative Technologies'}<span className="text-[#7388a6]">.</span>
              </h1>
            </div>
            <p className="text-xl text-slate-600">
              {isGerman 
                ? 'Innovation. Fortschritt. Verbesserung. Wir setzen modernste Technologien ein, um Arbeitsabläufe zu optimieren und Projektergebnisse aufzuwerten.'
                : 'Innovation. Progress. Improvement. We use the latest technologies to optimize workflows and enhance project results.'}
            </p>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {technologies.map((tech, index) => (
              <div 
                key={index}
                className="group p-8 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-[#7388a6]/20 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-[#7388a6]/10 rounded-xl flex items-center justify-center mb-6 text-[#7388a6] group-hover:bg-[#7388a6] group-hover:text-white transition-colors">
                  {tech.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">{tech.title}</h3>
                <p className="text-slate-600 leading-relaxed">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#7388a6]">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            {isGerman ? 'Interesse an unseren Technologien?' : 'Interested in our technologies?'}
          </h2>
          <Link
            href={`/${locale}/kontakt`}
            className="inline-flex items-center px-8 py-4 bg-white text-[#7388a6] font-semibold rounded-lg hover:bg-slate-100 transition-all"
          >
            {isGerman ? 'Jetzt anfragen' : 'Inquire Now'}
          </Link>
        </div>
      </section>
    </div>
  );
}
