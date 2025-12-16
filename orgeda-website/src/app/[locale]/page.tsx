'use client';

import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import Hero from '@/components/Hero';
import ContactForm from '@/components/ContactForm';
import AnimatedCounter from '@/components/AnimatedCounter';
import YouTubeEmbed from '@/components/YouTubeEmbed';
import ExpandableServiceCard from '@/components/ExpandableServiceCard';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { 
  ShieldCheckIcon, 
  BuildingOffice2Icon, 
  CogIcon, 
  TruckIcon, 
  CpuChipIcon,
  DocumentTextIcon,
  FireIcon,
  ClipboardDocumentListIcon,
  UserGroupIcon,
  ComputerDesktopIcon,
  TableCellsIcon,
  ArrowsRightLeftIcon,
  CubeTransparentIcon,
  ServerStackIcon,
  ArchiveBoxIcon,
  MapIcon,
  ChartBarIcon,
  CubeIcon,
  CameraIcon,
  PrinterIcon,
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 }
};

export default function HomePage() {
  const t = useTranslations('services');
  const tAbout = useTranslations('about');
  const tContact = useTranslations('contact');
  const tFooter = useTranslations('footer');
  const locale = useLocale();
  const isGerman = locale === 'de';

  const aboutRef = useRef(null);
  const { scrollYProgress: aboutScroll } = useScroll({
    target: aboutRef,
    offset: ["start end", "end start"]
  });
  const aboutY = useTransform(aboutScroll, [0, 1], [100, -100]);

  return (
    <article itemScope itemType="https://schema.org/WebPage">
      {/* Hero Section */}
      <Hero />

      {/* Services Overview */}
      <section 
        id="leistungen" 
        className="py-24 bg-white scroll-mt-20 overflow-hidden"
        aria-labelledby="services-heading"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 id="services-heading" className="text-3xl md:text-4xl font-bold text-slate-800">
              {t('title')}
            </h2>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-4 h-1 bg-[#7388a6] mx-auto rounded-full" 
            />
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              { key: 'brandschutz', href: '#brandschutz', icon: <ShieldCheckIcon className="w-7 h-7" /> },
              { key: 'bueroplanung', href: '#bueroplanung', icon: <BuildingOffice2Icon className="w-7 h-7" /> },
              { key: 'fabrikplanung', href: '#fabrikplanung', icon: <CogIcon className="w-7 h-7" /> },
              { key: 'logistikplanung', href: '#logistikplanung', icon: <TruckIcon className="w-7 h-7" /> },
              { key: 'innovativeTechniken', href: '#innovative-techniken', icon: <CpuChipIcon className="w-7 h-7" /> },
            ].map((service, index) => (
              <motion.a
                key={service.key}
                href={service.href}
                variants={fadeInUp}
                whileHover={{ 
                  y: -10, 
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
                  transition: { type: "spring", stiffness: 400 }
                }}
                whileTap={{ scale: 0.98 }}
                className="block group h-full"
              >
                <div className="relative h-full p-8 bg-white rounded-2xl shadow-sm border border-slate-100 transition-all duration-300 overflow-hidden flex flex-col">
                  {/* Hover background effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-[#7388a6]/5 to-transparent"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                  
                  <motion.div 
                    className="relative w-14 h-14 bg-[#7388a6]/10 rounded-xl flex items-center justify-center mb-6"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="text-[#7388a6] group-hover:text-white transition-colors duration-300">
                      {service.icon}
                    </div>
                  </motion.div>
                  
                  <h3 className="relative text-xl font-semibold text-slate-800 mb-3 group-hover:text-[#7388a6] transition-colors">
                    {t(`${service.key}.title`)}
                  </h3>
                  <p className="relative text-slate-600 leading-relaxed flex-grow">
                    {t(`${service.key}.description`)}
                  </p>
                  
                  <motion.div 
                    className="relative mt-6 flex items-center text-[#7388a6] font-medium mt-auto"
                    whileHover={{ x: 5 }}
                  >
                    <span className="text-sm">{isGerman ? 'Mehr erfahren' : 'Learn more'}</span>
                    <motion.svg 
                      className="ml-2 w-4 h-4"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </motion.svg>
                  </motion.div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Brandschutz Section */}
      <section id="brandschutz" className="py-24 bg-slate-50 scroll-mt-20 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-8"
          >
            <motion.div 
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="w-16 h-16 bg-[#7388a6]/10 rounded-xl flex items-center justify-center"
            >
              <ShieldCheckIcon className="w-8 h-8 text-[#7388a6]" />
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
              {isGerman ? 'Brandschutz' : 'Fire Safety'}<span className="text-[#7388a6]">.</span>
            </h2>
          </motion.div>
          
          <motion.p 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-xl text-slate-600 mb-12 max-w-3xl"
          >
            {isGerman 
              ? 'Professioneller Brandschutz für Ihre Sicherheit. Wir erstellen normgerechte Flucht- und Rettungspläne, Feuerwehrpläne und entwickeln ganzheitliche Brandschutzkonzepte.'
              : 'Professional fire protection for your safety.'}
          </motion.p>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { 
                title: isGerman ? 'Flucht- & Rettungspläne' : 'Escape & Rescue Plans', 
                icon: <DocumentTextIcon className="w-6 h-6" />,
                shortDescription: isGerman ? 'Normgerechte Sicherheitspläne' : 'Standard-compliant safety plans',
                fullDescription: isGerman 
                  ? 'Flucht- und Rettungspläne sind ein wesentlicher Bestandteil des betrieblichen Brandschutzes. Sie zeigen allen Personen im Gebäude die Fluchtwege und Notausgänge sowie die Standorte von Brandbekämpfungs- und Erste-Hilfe-Einrichtungen. Wir erstellen normgerechte Pläne nach DIN ISO 23601 und ASR A1.3/A2.3 für Ihr Unternehmen.'
                  : 'Escape and rescue plans are an essential part of operational fire protection. We create standard-compliant plans according to DIN ISO 23601 and ASR A1.3/A2.3.',
                features: isGerman ? [
                  'Erstellung nach DIN ISO 23601 und ASR A1.3/A2.3',
                  'Detaillierte Darstellung aller Fluchtwege',
                  'Kennzeichnung von Notausgängen und Sammelstellen',
                  'Standorte von Feuerlöschern und Erste-Hilfe-Material',
                  'Verhaltensregeln im Brandfall',
                  'Regelmäßige Aktualisierung bei baulichen Änderungen'
                ] : [
                  'Creation according to DIN ISO 23601',
                  'Detailed representation of all escape routes',
                  'Marking of emergency exits and assembly points',
                  'Locations of fire extinguishers and first aid equipment'
                ]
              },
              { 
                title: isGerman ? 'Feuerwehrpläne' : 'Fire Brigade Plans', 
                icon: <FireIcon className="w-6 h-6" />,
                shortDescription: isGerman ? 'Pläne für Einsatzkräfte' : 'Plans for emergency services',
                fullDescription: isGerman 
                  ? 'Feuerwehrpläne nach DIN 14095 dienen den Einsatzkräften zur schnellen Orientierung im Gebäude und auf dem Gelände. Sie zeigen wichtige Informationen wie Angriffswege, Wasserentnahmestellen, Gefahrenbereiche und technische Einrichtungen. Wir erstellen professionelle Feuerwehrpläne, die den aktuellen Normen entsprechen.'
                  : 'Fire brigade plans according to DIN 14095 help emergency services with quick orientation in the building. We create professional plans that meet current standards.',
                features: isGerman ? [
                  'Erstellung nach DIN 14095',
                  'Übersichtsplan, Geschosspläne und Umgebungsplan',
                  'Darstellung von Angriffswegen und Stellflächen',
                  'Kennzeichnung von Hydranten und Löschwasserentnahmestellen',
                  'Gefahrenbereiche und besondere Risiken',
                  'Abstimmung mit der zuständigen Feuerwehr'
                ] : [
                  'Creation according to DIN 14095',
                  'Overview plan, floor plans and site plan',
                  'Representation of attack routes and parking areas',
                  'Identification of hazardous areas'
                ]
              },
              { 
                title: isGerman ? 'Brandschutzkonzepte' : 'Fire Protection Concepts', 
                icon: <ShieldCheckIcon className="w-6 h-6" />,
                shortDescription: isGerman ? 'Ganzheitliche Schutzkonzepte' : 'Comprehensive protection concepts',
                fullDescription: isGerman 
                  ? 'Ein Brandschutzkonzept beschreibt alle baulichen, technischen und organisatorischen Brandschutzmaßnahmen für Ihr Gebäude. Wir entwickeln ganzheitliche Konzepte, die alle relevanten Aspekte berücksichtigen – von der Bausubstanz über technische Anlagen bis hin zu organisatorischen Maßnahmen wie Schulungen und Evakuierungsübungen.'
                  : 'A fire protection concept describes all structural, technical and organizational fire protection measures for your building. We develop comprehensive concepts that consider all relevant aspects.',
                features: isGerman ? [
                  'Analyse der baulichen Gegebenheiten',
                  'Bewertung von Brandrisiken und Schutzziele',
                  'Planung baulicher Brandschutzmaßnahmen',
                  'Konzeption technischer Brandschutzanlagen',
                  'Organisatorische Maßnahmen und Schulungskonzepte',
                  'Unterstützung bei Genehmigungsverfahren'
                ] : [
                  'Analysis of structural conditions',
                  'Assessment of fire risks and protection goals',
                  'Planning of structural fire protection measures',
                  'Conception of technical fire protection systems'
                ]
              },
              { 
                title: isGerman ? 'Brandschutzordnung' : 'Fire Protection Regulations', 
                icon: <ClipboardDocumentListIcon className="w-6 h-6" />,
                shortDescription: isGerman ? 'Regelwerk für Ihr Unternehmen' : 'Regulations for your company',
                fullDescription: isGerman 
                  ? 'Die Brandschutzordnung nach DIN 14096 regelt das Verhalten von Personen innerhalb eines Gebäudes im Brandfall. Sie besteht aus drei Teilen: Teil A (Aushang für alle Personen), Teil B (für Personen ohne besondere Brandschutzaufgaben) und Teil C (für Personen mit besonderen Brandschutzaufgaben). Wir erstellen eine auf Ihr Unternehmen zugeschnittene Brandschutzordnung.'
                  : 'Fire protection regulations according to DIN 14096 govern the behavior of persons within a building in case of fire. We create customized fire protection regulations for your company.',
                features: isGerman ? [
                  'Erstellung nach DIN 14096 (Teile A, B und C)',
                  'Individuelle Anpassung an Ihr Unternehmen',
                  'Verhaltensregeln für Mitarbeiter und Besucher',
                  'Aufgaben des Brandschutzbeauftragten',
                  'Evakuierungsplanung und Sammelstellenkonzept',
                  'Regelmäßige Schulungen und Übungen'
                ] : [
                  'Creation according to DIN 14096 (Parts A, B and C)',
                  'Individual adaptation to your company',
                  'Behavioral rules for employees and visitors',
                  'Evacuation planning and assembly point concept'
                ]
              },
            ].map((item, i) => (
              <ExpandableServiceCard key={i} service={item} index={i} bgColor="bg-white" />
            ))}
          </motion.div>

          {/* Additional Info with Image */}
          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-12 grid lg:grid-cols-2 gap-8 items-center"
          >
            <div className="p-8 bg-white rounded-2xl border border-slate-100">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                {isGerman ? 'Warum Brandschutz so wichtig ist' : 'Why Fire Safety Matters'}
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                {isGerman 
                  ? 'Brandschutz ist nicht nur gesetzliche Pflicht, sondern schützt Menschenleben und Sachwerte. Unsere Experten erstellen maßgeschneiderte Lösungen für Ihr Unternehmen – von der Erstanalyse bis zur Umsetzung aller erforderlichen Maßnahmen.'
                  : 'Fire safety is not just a legal requirement, but protects human lives and property. Our experts create customized solutions for your company – from initial analysis to implementation of all necessary measures.'}
              </p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start">
                  <span className="text-[#7388a6] mr-2">✓</span>
                  {isGerman ? 'DIN-konforme Flucht- und Rettungspläne' : 'DIN-compliant escape and rescue plans'}
                </li>
                <li className="flex items-start">
                  <span className="text-[#7388a6] mr-2">✓</span>
                  {isGerman ? 'Feuerwehrpläne nach DIN 14095' : 'Fire brigade plans according to DIN 14095'}
                </li>
                <li className="flex items-start">
                  <span className="text-[#7388a6] mr-2">✓</span>
                  {isGerman ? 'Ganzheitliche Brandschutzkonzepte' : 'Comprehensive fire protection concepts'}
                </li>
                <li className="flex items-start">
                  <span className="text-[#7388a6] mr-2">✓</span>
                  {isGerman ? 'Regelmäßige Aktualisierung und Wartung' : 'Regular updates and maintenance'}
                </li>
              </ul>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative rounded-2xl overflow-hidden shadow-lg"
            >
              <Image
                src="/images/brandschutz.png"
                alt={isGerman ? 'Brandschutzplanung' : 'Fire Safety Planning'}
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Büroplanung Section */}
      <section id="bueroplanung" className="py-24 bg-white scroll-mt-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-8"
          >
            <motion.div 
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="w-16 h-16 bg-[#7388a6]/10 rounded-xl flex items-center justify-center"
            >
              <BuildingOffice2Icon className="w-8 h-8 text-[#7388a6]" />
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
              {isGerman ? 'Büroplanung' : 'Office Planning'}<span className="text-[#7388a6]">.</span>
            </h2>
          </motion.div>

          <motion.p 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-xl text-slate-600 mb-12 max-w-3xl"
          >
            {isGerman 
              ? 'Wir gestalten moderne Arbeitsumgebungen, die Produktivität, Wohlbefinden und Zusammenarbeit fördern. Von der ersten Idee bis zur Umsetzung – wir begleiten Sie.'
              : 'We design modern work environments that promote productivity, well-being and collaboration. From the first idea to implementation – we accompany you.'}
          </motion.p>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { 
                title: isGerman ? 'Systematische Raumplanung' : 'Systematic Space Planning', 
                icon: <TableCellsIcon className="w-6 h-6" />,
                shortDescription: isGerman ? 'Optimale Nutzung Ihrer Büroflächen' : 'Optimal use of your office space',
                fullDescription: isGerman 
                  ? 'Eine systematische Raumplanung ist der Schlüssel zu einer effizienten Büroumgebung. Wir analysieren Ihre bestehenden Flächen, ermitteln den tatsächlichen Raumbedarf und entwickeln maßgeschneiderte Konzepte, die Ihre Arbeitsabläufe optimal unterstützen. Dabei berücksichtigen wir sowohl aktuelle Anforderungen als auch zukünftige Entwicklungen Ihres Unternehmens.'
                  : 'Systematic space planning is the key to an efficient office environment. We analyze your existing spaces, determine actual space requirements and develop customized concepts that optimally support your workflows.',
                features: isGerman ? [
                  'Bestandsaufnahme und Analyse der vorhandenen Flächen',
                  'Ermittlung des Flächenbedarfs nach Abteilungen',
                  'Entwicklung von Raumprogrammen und Flächenbilanzen',
                  'Optimierung der Wegebeziehungen und Kommunikationswege',
                  'Berücksichtigung von Wachstumsprognosen und Flexibilität',
                  '2D- und 3D-Visualisierung der Planungsergebnisse'
                ] : [
                  'Analysis of existing spaces',
                  'Determination of space requirements by department',
                  'Development of room programs and space balances',
                  'Optimization of pathways and communication routes'
                ]
              },
              { 
                title: isGerman ? 'Ganzheitliche Bürokonzepte' : 'Holistic Office Concepts', 
                icon: <BuildingOffice2Icon className="w-6 h-6" />,
                shortDescription: isGerman ? 'Von der Analyse bis zur Umsetzung' : 'From analysis to implementation',
                fullDescription: isGerman 
                  ? 'Ein ganzheitliches Bürokonzept geht weit über die reine Flächenplanung hinaus. Wir betrachten Ihr Büro als strategisches Instrument, das Unternehmenskultur, Arbeitsprozesse und Mitarbeiterzufriedenheit maßgeblich beeinflusst. Gemeinsam mit Ihnen entwickeln wir Konzepte, die Ihre Unternehmenswerte widerspiegeln und eine inspirierende Arbeitsatmosphäre schaffen.'
                  : 'A holistic office concept goes far beyond mere space planning. We view your office as a strategic instrument that significantly influences corporate culture, work processes and employee satisfaction.',
                features: isGerman ? [
                  'Analyse der Unternehmenskultur und Arbeitsprozesse',
                  'Entwicklung eines individuellen Bürokonzepts',
                  'Integration von Corporate Design und Markenidentität',
                  'Planung von Meeting- und Kommunikationszonen',
                  'Berücksichtigung von Akustik, Beleuchtung und Raumklima',
                  'Begleitung während der gesamten Umsetzungsphase'
                ] : [
                  'Analysis of corporate culture and work processes',
                  'Development of an individual office concept',
                  'Integration of corporate design and brand identity',
                  'Planning of meeting and communication zones'
                ]
              },
              { 
                title: 'New Work Spaces', 
                icon: <UserGroupIcon className="w-6 h-6" />,
                shortDescription: isGerman ? 'Moderne Arbeitsumgebungen' : 'Modern work environments',
                fullDescription: isGerman 
                  ? 'New Work steht für eine neue Arbeitskultur, die Flexibilität, Selbstbestimmung und Kollaboration in den Mittelpunkt stellt. Wir gestalten Arbeitsumgebungen, die verschiedene Arbeitssituationen unterstützen – von konzentrierter Einzelarbeit bis hin zu kreativen Teamworkshops. Durch die richtige Mischung aus offenen und geschlossenen Bereichen fördern wir produktives Arbeiten.'
                  : 'New Work stands for a new work culture that focuses on flexibility, self-determination and collaboration. We design work environments that support different work situations.',
                features: isGerman ? [
                  'Activity-Based Working Konzepte',
                  'Kreativ- und Innovationszonen für Teamarbeit',
                  'Rückzugsbereiche für konzentriertes Arbeiten',
                  'Lounge- und Kommunikationsbereiche',
                  'Integration von Technologie und digitalen Tools',
                  'Flexible Möblierung für unterschiedliche Nutzungsszenarien'
                ] : [
                  'Activity-Based Working concepts',
                  'Creative and innovation zones for teamwork',
                  'Retreat areas for concentrated work',
                  'Lounge and communication areas'
                ]
              },
              { 
                title: 'Desk Sharing', 
                icon: <ComputerDesktopIcon className="w-6 h-6" />,
                shortDescription: isGerman ? 'Flexible Arbeitsplatzkonzepte' : 'Flexible workplace concepts',
                fullDescription: isGerman 
                  ? 'Desk Sharing ist mehr als nur das Teilen von Schreibtischen – es ist ein Konzept für die moderne, hybride Arbeitswelt. Wir entwickeln Desk-Sharing-Modelle, die zu Ihrer Unternehmenskultur passen und gleichzeitig Ihre Flächeneffizienz optimieren. Dabei berücksichtigen wir Home-Office-Quoten und sorgen für eine reibungslose Buchung und Nutzung der Arbeitsplätze.'
                  : 'Desk Sharing is more than just sharing desks – it is a concept for the modern, hybrid working world. We develop desk-sharing models that suit your corporate culture while optimizing space efficiency.',
                features: isGerman ? [
                  'Analyse der Homeoffice-Quote und Anwesenheitszeiten',
                  'Berechnung der optimalen Sharing-Quote',
                  'Entwicklung von Buchungssystemen für Arbeitsplätze',
                  'Clean-Desk-Policy und Aufbewahrungskonzepte',
                  'Gestaltung von persönlichen Schließfächern (Lockers)',
                  'Schulung und Change-Management für Mitarbeiter'
                ] : [
                  'Analysis of home office rate and attendance times',
                  'Calculation of optimal sharing ratio',
                  'Development of workplace booking systems',
                  'Clean desk policy and storage concepts'
                ]
              },
            ].map((item, i) => (
              <ExpandableServiceCard key={i} service={item} index={i} bgColor="bg-slate-50" />
            ))}
          </motion.div>

          {/* Additional Info */}
          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-12 grid md:grid-cols-2 gap-8"
          >
            <div className="p-6 bg-slate-50 rounded-2xl">
              <h3 className="text-lg font-semibold text-slate-800 mb-3">
                {isGerman ? 'New Work & Moderne Arbeitswelten' : 'New Work & Modern Workspaces'}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {isGerman 
                  ? 'Die Arbeitswelt verändert sich. Wir helfen Ihnen, Büroräume zu schaffen, die flexibles Arbeiten, Kollaboration und Konzentration gleichermaßen ermöglichen. Mit Desk-Sharing-Konzepten optimieren Sie Ihre Flächennutzung.'
                  : 'The world of work is changing. We help you create office spaces that enable flexible working, collaboration and concentration equally. With desk-sharing concepts, you optimize your space utilization.'}
              </p>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl">
              <h3 className="text-lg font-semibold text-slate-800 mb-3">
                {isGerman ? 'Ergonomie & Wohlbefinden' : 'Ergonomics & Well-being'}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {isGerman 
                  ? 'Gesunde Mitarbeiter sind produktiver. Wir berücksichtigen ergonomische Aspekte, optimale Beleuchtung, Akustik und Raumklima bei der Planung Ihrer Büroräume.'
                  : 'Healthy employees are more productive. We consider ergonomic aspects, optimal lighting, acoustics and room climate when planning your office spaces.'}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Fabrikplanung Section */}
      <section id="fabrikplanung" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-8"
          >
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 bg-[#7388a6]/10 rounded-xl flex items-center justify-center"
            >
              <CogIcon className="w-8 h-8 text-[#7388a6]" />
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
              {isGerman ? 'Fabrikplanung' : 'Factory Planning'}<span className="text-[#7388a6]">.</span>
            </h2>
          </motion.div>

          <motion.p 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-xl text-slate-600 mb-12 max-w-3xl"
          >
            {isGerman 
              ? 'Effiziente Produktion beginnt mit der richtigen Planung. Wir optimieren Ihre Fabrikprozesse von Grund auf – für maximale Produktivität und minimale Durchlaufzeiten.'
              : 'Efficient production starts with the right planning. We optimize your factory processes from the ground up – for maximum productivity and minimum throughput times.'}
          </motion.p>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { 
                title: isGerman ? 'Fabrikkonzepte' : 'Factory Concepts', 
                icon: <CogIcon className="w-6 h-6" />,
                shortDescription: isGerman ? 'Ganzheitliche Fabrikplanung' : 'Holistic factory planning',
                fullDescription: isGerman 
                  ? 'Ein Fabrikkonzept ist die strategische Grundlage für Ihre Produktion. Wir entwickeln zukunftsfähige Konzepte, die alle Aspekte Ihrer Fertigung berücksichtigen – von der Produktionslogik über die Gebäudestruktur bis hin zur Integration modernster Technologien. Dabei denken wir Ihre Fabrik von der Wertschöpfung her und optimieren alle Prozesse entlang der gesamten Lieferkette.'
                  : 'A factory concept is the strategic foundation for your production. We develop future-proof concepts that consider all aspects of your manufacturing.',
                features: isGerman ? [
                  'Analyse der Ist-Situation und Identifikation von Optimierungspotenzialen',
                  'Entwicklung von Zielkonzepten und Produktionsszenarien',
                  'Standortbewertung und Variantenvergleich',
                  'Integration von Industrie 4.0 und Digitalisierung',
                  'Nachhaltigkeitskonzepte und Energieeffizienz',
                  'Investitionsplanung und Umsetzungs-Roadmap'
                ] : [
                  'Analysis of current situation',
                  'Development of target concepts',
                  'Location evaluation and variant comparison',
                  'Industry 4.0 integration'
                ]
              },
              { 
                title: 'Layoutplanung', 
                icon: <CubeTransparentIcon className="w-6 h-6" />,
                shortDescription: isGerman ? 'Optimale Flächennutzung' : 'Optimal space utilization',
                fullDescription: isGerman 
                  ? 'Die Layoutplanung ist das Herzstück der Fabrikplanung. Wir gestalten Produktionslandschaften, in denen alle Bereiche – von der Anlieferung über die Fertigung bis zum Versand – optimal miteinander verbunden sind. Mit modernen 3D-Tools visualisieren wir Ihr Layout und ermöglichen virtuelle Begehungen noch vor dem ersten Spatenstich.'
                  : 'Layout planning is the heart of factory planning. We design production landscapes where all areas are optimally connected.',
                features: isGerman ? [
                  'Grob- und Feinlayoutplanung in 2D und 3D',
                  'Optimierung der Produktionsflächen und Lagerkapazitäten',
                  'Simulation von Materialflüssen und Transportwegen',
                  'Integration von Produktionsanlagen und Infrastruktur',
                  'Berücksichtigung von Erweiterungsmöglichkeiten',
                  'Virtuelle Fabrikbegehungen mit VR-Technologie'
                ] : [
                  'Rough and detailed layout planning in 2D and 3D',
                  'Optimization of production areas',
                  'Simulation of material flows',
                  'Virtual factory tours with VR technology'
                ]
              },
              { 
                title: isGerman ? 'Prozessplanung' : 'Process Planning', 
                icon: <ArrowsRightLeftIcon className="w-6 h-6" />,
                shortDescription: isGerman ? 'Effiziente Arbeitsabläufe' : 'Efficient workflows',
                fullDescription: isGerman 
                  ? 'Die Prozessplanung definiert, wie Ihre Produkte effizient gefertigt werden. Wir analysieren Ihre Fertigungsprozesse, identifizieren Engpässe und Verschwendung und gestalten schlanke, effiziente Abläufe. Mit Wertstromanalyse und Lean-Methoden eliminieren wir nicht-wertschöpfende Tätigkeiten und steigern Ihre Produktivität.'
                  : 'Process planning defines how your products are manufactured efficiently. We analyze your manufacturing processes and design lean, efficient workflows.',
                features: isGerman ? [
                  'Wertstromanalyse (Value Stream Mapping)',
                  'Identifikation von Verschwendung und Engpässen',
                  'Taktzeit- und Kapazitätsplanung',
                  'Arbeitsplatzgestaltung nach ergonomischen Kriterien',
                  'One-Piece-Flow und Pull-Systeme',
                  'Standardisierung und Kontinuierliche Verbesserung (KVP)'
                ] : [
                  'Value Stream Mapping',
                  'Identification of waste and bottlenecks',
                  'Cycle time and capacity planning',
                  'Continuous improvement processes'
                ]
              },
              { 
                title: isGerman ? 'Materialflussplanung' : 'Material Flow Planning', 
                icon: <ServerStackIcon className="w-6 h-6" />,
                shortDescription: isGerman ? 'Intelligente Logistik' : 'Intelligent logistics',
                fullDescription: isGerman 
                  ? 'Der Materialfluss ist das Nervensystem Ihrer Fabrik. Wir planen intelligente Materialflusssysteme, die Just-in-Time-Lieferung ermöglichen und Bestände minimieren. Von manuellen Transportsystemen bis hin zu vollautomatisierten fahrerlosen Transportsystemen (FTS) – wir finden die optimale Lösung für Ihre Anforderungen.'
                  : 'Material flow is the nervous system of your factory. We plan intelligent material flow systems that enable Just-in-Time delivery and minimize inventory.',
                features: isGerman ? [
                  'Analyse und Optimierung bestehender Materialflüsse',
                  'Planung von Fördertechnik und Transportsystemen',
                  'Integration von fahrerlosen Transportsystemen (FTS/AGV)',
                  'Puffer- und Bereitstellungskonzepte',
                  'Materialfluss-Simulation und Validierung',
                  'Just-in-Sequence (JIS) und Kanban-Systeme'
                ] : [
                  'Analysis and optimization of material flows',
                  'Planning of conveyor technology',
                  'Integration of automated guided vehicles (AGV)',
                  'Just-in-Sequence and Kanban systems'
                ]
              },
            ].map((item, i) => (
              <ExpandableServiceCard key={i} service={item} index={i} bgColor="bg-white" />
            ))}
          </motion.div>

          {/* Lean Production Info */}
          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-12 p-8 bg-white rounded-2xl border border-slate-100"
          >
            <h3 className="text-xl font-semibold text-slate-800 mb-4">
              {isGerman ? 'Lean Production & Industrie 4.0' : 'Lean Production & Industry 4.0'}
            </h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              {isGerman 
                ? 'Unsere Fabrikplanung verbindet bewährte Lean-Prinzipien mit modernster Digitalisierung. Wir analysieren Ihre Wertströme, identifizieren Verschwendung und gestalten schlanke, zukunftsfähige Produktionsprozesse.'
                : 'Our factory planning combines proven lean principles with state-of-the-art digitalization. We analyze your value streams, identify waste and design lean, future-proof production processes.'}
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mt-6">
              <div className="text-center p-4 bg-slate-50 rounded-xl">
                <div className="text-2xl font-bold text-[#7388a6]">30%</div>
                <div className="text-sm text-slate-600 mt-1">{isGerman ? 'Effizienzsteigerung' : 'Efficiency Increase'}</div>
              </div>
              <div className="text-center p-4 bg-slate-50 rounded-xl">
                <div className="text-2xl font-bold text-[#7388a6]">-25%</div>
                <div className="text-sm text-slate-600 mt-1">{isGerman ? 'Durchlaufzeit' : 'Throughput Time'}</div>
              </div>
              <div className="text-center p-4 bg-slate-50 rounded-xl">
                <div className="text-2xl font-bold text-[#7388a6]">-40%</div>
                <div className="text-sm text-slate-600 mt-1">{isGerman ? 'Flächenbedarf' : 'Space Requirements'}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Logistikplanung Section */}
      <section id="logistikplanung" className="py-24 bg-white scroll-mt-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-8"
          >
            <motion.div 
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-16 h-16 bg-[#7388a6]/10 rounded-xl flex items-center justify-center"
            >
              <TruckIcon className="w-8 h-8 text-[#7388a6]" />
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
              {isGerman ? 'Logistikplanung' : 'Logistics Planning'}<span className="text-[#7388a6]">.</span>
            </h2>
          </motion.div>

          <motion.p 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-xl text-slate-600 mb-12 max-w-3xl"
          >
            {isGerman 
              ? 'Von der Konzeption bis zur Umsetzung: Wir planen effiziente Logistikprozesse, die Ihre Supply Chain optimieren und Kosten senken.'
              : 'From conception to implementation: We plan efficient logistics processes that optimize your supply chain and reduce costs.'}
          </motion.p>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { 
                title: isGerman ? 'Ganzheitliche Logistikkonzepte' : 'Comprehensive Logistics', 
                icon: <TruckIcon className="w-6 h-6" />,
                shortDescription: isGerman ? 'Durchgängige Supply-Chain-Planung' : 'End-to-end supply chain planning',
                fullDescription: isGerman 
                  ? 'Ein ganzheitliches Logistikkonzept betrachtet Ihre gesamte Wertschöpfungskette – vom Wareneingang über die interne Logistik bis zum Versand. Wir analysieren Ihre Prozesse, identifizieren Optimierungspotenziale und entwickeln maßgeschneiderte Lösungen, die Durchlaufzeiten verkürzen und Bestände reduzieren.'
                  : 'A comprehensive logistics concept considers your entire value chain – from goods receipt to internal logistics to shipping.',
                features: isGerman ? [
                  'Analyse der gesamten Supply Chain',
                  'Identifikation von Engpässen und Ineffizienzen',
                  'Entwicklung von Logistikstrategien',
                  'Optimierung von Lagerbeständen und Umschlagzeiten',
                  'Integration von Lieferanten und Kunden',
                  'Kennzahlensysteme und Logistik-Controlling'
                ] : [
                  'Analysis of the entire supply chain',
                  'Identification of bottlenecks',
                  'Development of logistics strategies',
                  'Optimization of inventory levels'
                ]
              },
              { 
                title: isGerman ? 'Lagerplanung' : 'Warehouse Planning', 
                icon: <ArchiveBoxIcon className="w-6 h-6" />,
                shortDescription: isGerman ? 'Effiziente Lagerstrukturen' : 'Efficient warehouse structures',
                fullDescription: isGerman 
                  ? 'Die richtige Lagerplanung ist entscheidend für schnelle Durchlaufzeiten und niedrige Kosten. Wir planen Hochregallager, Automatische Kleinteilelager (AKL), Fachbodenregale und innovative Shuttle-Systeme – immer optimal auf Ihre Artikelstruktur und Prozesse abgestimmt.'
                  : 'Proper warehouse planning is crucial for fast throughput times and low costs. We plan high-bay warehouses, automatic small parts warehouses, and innovative shuttle systems.',
                features: isGerman ? [
                  'Bedarfsanalyse und Dimensionierung',
                  'Auswahl der optimalen Lagertechnik',
                  'Planung von Hochregallagern und AKL',
                  'Zonierung und Wegeoptimierung',
                  'Kommissionierstrategien und Pick-Systeme',
                  'Lagersteuerung und WMS-Integration'
                ] : [
                  'Demand analysis and dimensioning',
                  'Selection of optimal storage technology',
                  'High-bay warehouse planning',
                  'Zoning and path optimization'
                ]
              },
              { 
                title: isGerman ? 'Intralogistik' : 'Intralogistics', 
                icon: <MapIcon className="w-6 h-6" />,
                shortDescription: isGerman ? 'Innerbetriebliche Logistik' : 'Internal logistics',
                fullDescription: isGerman 
                  ? 'Intralogistik umfasst alle Material- und Informationsflüsse innerhalb Ihres Unternehmens. Wir planen effiziente Transportsysteme – von Staplern über Fördertechnik bis hin zu fahrerlosen Transportsystemen (FTS). Unser Ziel: Minimale Transportzeiten bei maximaler Flexibilität.'
                  : 'Intralogistics covers all material and information flows within your company. We plan efficient transport systems – from forklifts to conveyor technology to automated guided vehicles.',
                features: isGerman ? [
                  'Analyse der innerbetrieblichen Materialflüsse',
                  'Planung von Fördertechnik und Transportsystemen',
                  'Fahrerlose Transportsysteme (FTS/AGV)',
                  'Routenzug- und Milkrun-Konzepte',
                  'Verkehrswegeplanung und Kreuzungspunkte',
                  'Simulation und Validierung der Materialflüsse'
                ] : [
                  'Analysis of internal material flows',
                  'Planning of conveyor technology',
                  'Automated guided vehicles (AGV)',
                  'Route train and milk run concepts'
                ]
              },
              { 
                title: 'BIM Logistikplanung', 
                icon: <ChartBarIcon className="w-6 h-6" />,
                shortDescription: isGerman ? 'Digitale Planungsmethoden' : 'Digital planning methods',
                fullDescription: isGerman 
                  ? 'Building Information Modeling (BIM) revolutioniert die Logistikplanung. Mit digitalen Zwillingen Ihrer Logistiksysteme können wir Prozesse simulieren, Kollisionen erkennen und Optimierungen durchführen – alles virtuell, bevor die reale Umsetzung beginnt. Das spart Zeit, Kosten und vermeidet Planungsfehler.'
                  : 'Building Information Modeling (BIM) revolutionizes logistics planning. With digital twins of your logistics systems, we can simulate processes and perform optimizations virtually.',
                features: isGerman ? [
                  '3D-Modellierung von Logistiksystemen',
                  'Erstellung digitaler Zwillinge',
                  'Kollisionsprüfung und Raumanalyse',
                  'Ablaufsimulation und Kapazitätsanalyse',
                  'Virtuelle Inbetriebnahme',
                  'Datenübergabe an Facility Management'
                ] : [
                  '3D modeling of logistics systems',
                  'Creation of digital twins',
                  'Collision checking and space analysis',
                  'Process simulation and capacity analysis'
                ]
              },
            ].map((item, i) => (
              <ExpandableServiceCard key={i} service={item} index={i} bgColor="bg-slate-50" />
            ))}
          </motion.div>

          {/* BIM Info */}
          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-12 grid md:grid-cols-2 gap-8"
          >
            <div className="p-6 bg-slate-50 rounded-2xl">
              <h3 className="text-lg font-semibold text-slate-800 mb-3">
                BIM {isGerman ? 'in der Logistikplanung' : 'in Logistics Planning'}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {isGerman 
                  ? 'Mit Building Information Modeling (BIM) erstellen wir digitale Zwillinge Ihrer Logistiksysteme. So können wir Prozesse simulieren, optimieren und Fehler vermeiden, bevor der erste Spatenstich getan ist.'
                  : 'With Building Information Modeling (BIM), we create digital twins of your logistics systems. This allows us to simulate, optimize and avoid errors before the first shovel hits the ground.'}
              </p>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl">
              <h3 className="text-lg font-semibold text-slate-800 mb-3">
                {isGerman ? 'Automatisierung & Intralogistik' : 'Automation & Intralogistics'}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {isGerman 
                  ? 'Wir integrieren moderne Automatisierungstechnologien wie AGVs (Automated Guided Vehicles), Fördertechnik und intelligente Lagersysteme in Ihre Logistikprozesse für maximale Effizienz.'
                  : 'We integrate modern automation technologies such as AGVs (Automated Guided Vehicles), conveyor technology and intelligent storage systems into your logistics processes for maximum efficiency.'}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Innovative Techniken Section */}
      <section id="innovative-techniken" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-8"
          >
            <motion.div 
              animate={{ 
                boxShadow: [
                  "0 0 0 0 rgba(115, 136, 166, 0.4)",
                  "0 0 0 20px rgba(115, 136, 166, 0)",
                ]
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-16 h-16 bg-[#7388a6]/10 rounded-xl flex items-center justify-center"
            >
              <CpuChipIcon className="w-8 h-8 text-[#7388a6]" />
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
              {isGerman ? 'Innovative Techniken' : 'Innovative Technologies'}<span className="text-[#7388a6]">.</span>
            </h2>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { 
                title: 'Augmented Reality', 
                icon: <CubeIcon className="w-6 h-6" />,
                shortDescription: isGerman ? 'Erweiterte Realität für Planung' : 'Extended reality for planning',
                fullDescription: isGerman 
                  ? 'Augmented Reality (AR) bringt Ihre Planungen zum Leben. Mit AR können Sie zukünftige Anlagen, Maschinen oder Gebäude direkt vor Ort visualisieren – einfach durch ein Tablet oder eine AR-Brille. So können Sie Planungsvarianten vergleichen, Kollisionen erkennen und Entscheidungen fundiert treffen, bevor die Umsetzung beginnt.'
                  : 'Augmented Reality (AR) brings your plans to life. With AR, you can visualize future facilities, machines or buildings directly on site.',
                features: isGerman ? [
                  'Visualisierung von 3D-Modellen in realer Umgebung',
                  'Maßstabsgetreue Darstellung von Maschinen und Anlagen',
                  'Kollisionsprüfung mit vorhandener Infrastruktur',
                  'Variantenvergleich vor Ort',
                  'Präsentation für Stakeholder und Entscheider',
                  'Integration mit CAD und BIM-Daten'
                ] : [
                  'Visualization of 3D models in real environment',
                  'Scale representation of machines',
                  'Collision checking',
                  'Variant comparison on site'
                ]
              },
              { 
                title: isGerman ? 'Drohnenvermessung' : 'Drone Surveying', 
                icon: <CameraIcon className="w-6 h-6" />,
                shortDescription: isGerman ? 'Luftaufnahmen und 3D-Modelle' : 'Aerial imaging and 3D models',
                fullDescription: isGerman 
                  ? 'Unsere Drohnen erfassen große Flächen schnell und präzise. Mit Photogrammetrie erstellen wir hochauflösende Orthophotos, digitale Geländemodelle und 3D-Punktwolken. Das ist ideal für Bestandsaufnahmen von Gebäuden, Geländevermessungen oder die Dokumentation von Baustellen.'
                  : 'Our drones capture large areas quickly and precisely. We create high-resolution orthophotos, digital terrain models and 3D point clouds.',
                features: isGerman ? [
                  'Befliegung und Luftbildaufnahmen',
                  'Orthophotos und Geländemodelle',
                  '3D-Punktwolken aus Photogrammetrie',
                  'Volumenmessung und Massenermittlung',
                  'Baustellen-Dokumentation und Fortschrittskontrolle',
                  'Thermografie und Gebäudeinspektion'
                ] : [
                  'Aerial surveys and images',
                  'Orthophotos and terrain models',
                  '3D point clouds from photogrammetry',
                  'Construction site documentation'
                ]
              },
              { 
                title: '3D-Laserscanning', 
                icon: <CpuChipIcon className="w-6 h-6" />,
                shortDescription: isGerman ? 'Präzise Bestandsaufnahme' : 'Precise as-built documentation',
                fullDescription: isGerman 
                  ? '3D-Laserscanning ermöglicht eine millimetergenaue Erfassung bestehender Gebäude und Anlagen. Aus den Scandaten erstellen wir präzise 3D-Modelle, die als Grundlage für Ihre Planung dienen. Das spart Zeit und Kosten, da Fehlerquellen durch ungenaue Bestandspläne eliminiert werden.'
                  : '3D laser scanning enables millimeter-precise capture of existing buildings and systems. We create precise 3D models that serve as the basis for your planning.',
                features: isGerman ? [
                  'Terrestrisches 3D-Laserscanning',
                  'Registrierung und Aufbereitung von Punktwolken',
                  'Erstellung von 3D-Modellen und CAD-Plänen',
                  'As-Built-Dokumentation und Bestandsaufnahme',
                  'Integration in BIM-Prozesse',
                  'Soll-Ist-Vergleich und Qualitätskontrolle'
                ] : [
                  'Terrestrial 3D laser scanning',
                  'Point cloud registration and processing',
                  '3D model and CAD plan creation',
                  'As-built documentation'
                ]
              },
              { 
                title: '3D-Druck', 
                icon: <PrinterIcon className="w-6 h-6" />,
                shortDescription: isGerman ? 'Physische Modelle und Prototypen' : 'Physical models and prototypes',
                fullDescription: isGerman 
                  ? 'Mit 3D-Druck fertigen wir maßstabsgetreue physische Modelle Ihrer Planungen. Ob Fabrikmodell, Bürolayout oder Prototyp – 3D-gedruckte Modelle helfen bei der Visualisierung, der Kommunikation mit Stakeholdern und der Validierung von Konzepten, bevor teure Änderungen in der Umsetzungsphase anfallen.'
                  : 'We use 3D printing to create scale physical models of your plans. 3D-printed models help with visualization and concept validation.',
                features: isGerman ? [
                  'Maßstabsmodelle von Fabriken und Gebäuden',
                  'Layout-Modelle für Präsentationen',
                  'Prototypen für Vorrichtungen und Werkzeuge',
                  'Farbige Modelle für bessere Verständlichkeit',
                  'Schnelle Iteration von Designvarianten',
                  'Modelle für Workshops und Schulungen'
                ] : [
                  'Scale models of factories and buildings',
                  'Layout models for presentations',
                  'Prototypes for fixtures and tools',
                  'Rapid iteration of design variants'
                ]
              },
            ].map((item, i) => (
              <ExpandableServiceCard key={i} service={item} index={i} bgColor="bg-white" />
            ))}
          </motion.div>

          {/* Videos Section */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">
              {isGerman ? 'Unsere Technologien in Aktion' : 'Our Technologies in Action'}
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-slate-600 mb-3 font-medium">Augmented Reality</p>
                <YouTubeEmbed videoId="PKn9g7Qjf1k" title="Augmented Reality" />
              </div>
              <div>
                <p className="text-sm text-slate-600 mb-3 font-medium">3D-Laserscanning</p>
                <YouTubeEmbed videoId="aeIJYGhltpU" title="3D-Laserscanning" />
              </div>
              <div>
                <p className="text-sm text-slate-600 mb-3 font-medium">{isGerman ? 'Drohnenvermessung' : 'Drone Surveying'}</p>
                <YouTubeEmbed videoId="vXKZQBv6E54" title="Drohnenvermessung" />
              </div>
              <div>
                <p className="text-sm text-slate-600 mb-3 font-medium">{isGerman ? '3D-Scan für Brandschutz' : '3D Scanning for Fire Safety'}</p>
                <YouTubeEmbed videoId="jtx4ifEvsx0" title="3D-Laserscanning Brandschutz" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section with Animated Counters */}
      <section ref={aboutRef} id="ueber-uns" className="py-24 bg-white scroll-mt-20 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                {tAbout('title')}
              </h2>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-xl text-[#7388a6] font-medium mb-6"
              >
                {tAbout('subtitle')}
              </motion.p>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-lg text-slate-600 leading-relaxed"
              >
                {tAbout('description')}
              </motion.p>
            </motion.div>

            <motion.div 
              style={{ y: aboutY }}
              className="relative"
            >
              <motion.div 
                animate={{ rotate: [6, 8, 6] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -top-4 -left-4 w-72 h-72 bg-[#7388a6]/10 rounded-3xl" 
              />
              <motion.div 
                animate={{ rotate: [-6, -8, -6] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute -bottom-4 -right-4 w-48 h-48 bg-slate-200/50 rounded-3xl" 
              />
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="relative bg-white rounded-2xl shadow-xl p-8"
              >
                <div className="grid grid-cols-2 gap-8">
                  <AnimatedCounter end={500} suffix="+" label={isGerman ? 'Projekte' : 'Projects'} />
                  <AnimatedCounter end={20} suffix="+" label={isGerman ? 'Jahre Erfahrung' : 'Years Experience'} />
                  <AnimatedCounter end={100} suffix="%" label="Engagement" />
                  <AnimatedCounter end={5} label={isGerman ? 'Standorte' : 'Locations'} />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
              {tContact('title')}<span className="text-[#7388a6]">.</span>
            </h2>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-4 h-1 bg-[#7388a6] mx-auto rounded-full" 
            />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-slate-800 mb-8">
                {isGerman ? 'Schreiben Sie uns' : 'Write to us'}
              </h3>
              <ContactForm />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-slate-800 mb-8">
                {isGerman ? 'Kontaktdaten' : 'Contact Information'}
              </h3>
              
              <motion.div 
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-6"
              >
                {[
                  { icon: <MapPinIcon className="w-6 h-6 text-[#7388a6]" />, title: isGerman ? 'Adresse' : 'Address', content: `Orgeda GmbH\n${tFooter('address')}` },
                  { icon: <PhoneIcon className="w-6 h-6 text-[#7388a6]" />, title: isGerman ? 'Telefon' : 'Phone', content: tFooter('phone'), href: `tel:${tFooter('phone').replace(/\s/g, '')}` },
                  { icon: <EnvelopeIcon className="w-6 h-6 text-[#7388a6]" />, title: 'E-Mail', content: tFooter('email'), href: `mailto:${tFooter('email')}` },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    whileHover={{ x: 10, transition: { duration: 0.2 } }}
                    className="flex items-start gap-4 p-6 bg-white rounded-xl cursor-pointer"
                  >
                    <motion.div 
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="w-12 h-12 bg-[#7388a6]/10 rounded-lg flex items-center justify-center flex-shrink-0"
                    >
                      {item.icon}
                    </motion.div>
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-1">{item.title}</h4>
                      {item.href ? (
                        <a href={item.href} className="text-slate-600 hover:text-[#7388a6] transition-colors">
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-slate-600 whitespace-pre-line">{item.content}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </article>
  );
}
