'use client';

import { useTranslations, useLocale } from 'next-intl';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function Hero() {
  const t = useTranslations('hero');
  const locale = useLocale();
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const handleScrollToServices = () => {
    const element = document.querySelector('#leistungen');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToContact = () => {
    const element = document.querySelector('#kontakt');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section ref={ref} className="relative min-h-screen flex items-center bg-gradient-to-br from-white via-slate-50 to-slate-100 overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-20 -right-20 sm:-top-40 sm:-right-40 w-40 h-40 sm:w-80 sm:h-80 bg-[#7388a6]/10 rounded-full blur-3xl" 
        />
        <motion.div 
          animate={{ scale: [1.2, 1, 1.2], x: [0, 50, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-20 -left-20 sm:-bottom-40 sm:-left-40 w-40 h-40 sm:w-80 sm:h-80 bg-[#7388a6]/5 rounded-full blur-3xl" 
        />
      </div>

      <motion.div 
        style={{ y, opacity }}
        className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-32 lg:py-40"
      >
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            {/* Trust badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#7388a6]/10 rounded-full text-sm text-[#7388a6] font-medium mb-6"
            >
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              {locale === 'de' ? '20+ Jahre Erfahrung • 500+ Projekte in Deutschland' : '20+ Years Experience • 500+ Projects in Germany'}
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-slate-800 leading-tight"
            >
              {locale === 'de' ? (
                <>
                  <span>Professionelle Planung für </span>
                  <motion.span
                    className="text-[#7388a6]"
                    animate={{ opacity: [1, 0.8, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    Brandschutz, Fabriken & Büros
                  </motion.span>
                </>
              ) : (
                <>
                  <span>Professional Planning for </span>
                  <motion.span className="text-[#7388a6]">Fire Safety, Factories & Offices</motion.span>
                </>
              )}
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              {locale === 'de' 
                ? 'Wir sind Ihr zertifizierter Partner für Brandschutzplanung, Fabrik- und Bürooptimierung in der DACH-Region. Maßgeschneiderte Lösungen nach deutschen DIN-Standards — von der Erstberatung bis zur Umsetzung.'
                : 'We are your certified partner for fire safety planning, factory and office optimization in the DACH region. Customized solutions according to German DIN standards — from initial consultation to implementation.'}
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <motion.button
                onClick={handleScrollToContact}
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center px-8 py-4 bg-[#7388a6] text-white font-bold rounded-lg hover:bg-[#5f7291] transition-colors shadow-lg hover:shadow-xl text-base"
              >
                {locale === 'de' ? 'Kostenlose Erstberatung' : 'Free Initial Consultation'}
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.button>
              
              <motion.a
                href="tel:+49123456789"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#7388a6] font-semibold rounded-lg border-2 border-[#7388a6] hover:bg-[#7388a6]/5 transition-colors text-base"
              >
                <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {locale === 'de' ? 'Jetzt anrufen' : 'Call Now'}
              </motion.a>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-slate-500"
            >
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>{locale === 'de' ? 'DIN-zertifiziert' : 'DIN Certified'}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>{locale === 'de' ? 'DACH-Region' : 'DACH Region'}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>{locale === 'de' ? 'Kostenlose Beratung' : 'Free Consultation'}</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative hidden md:block"
          >
            <div className="relative">
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 sm:-top-8 -left-4 sm:-left-8 w-32 sm:w-64 h-32 sm:h-64 bg-[#7388a6]/10 rounded-3xl transform rotate-6" 
              />
              <motion.div 
                animate={{ y: [0, 10, 0], rotate: [-6, -3, -6] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 sm:-bottom-8 -right-4 sm:-right-8 w-24 sm:w-48 h-24 sm:h-48 bg-slate-200/50 rounded-3xl transform -rotate-6" 
              />
              
              <motion.div 
                whileHover={{ scale: 1.02, rotate: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative bg-gradient-to-br from-[#7388a6] to-slate-600 rounded-2xl sm:rounded-3xl p-1 overflow-hidden"
              >
                <div className="relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden">
                  <Image
                    src="/images/hero.png"
                    alt="Modern Architecture"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 text-white">
                    <p className="font-semibold text-sm sm:text-base">Engineering Excellence</p>
                    <p className="text-xs sm:text-sm opacity-80">Since 2019</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.button 
          onClick={handleScrollToServices}
          whileHover={{ scale: 1.1 }}
          className="flex flex-col items-center text-slate-400 hover:text-[#7388a6] transition-colors"
        >
          <motion.span 
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-xs sm:text-sm mb-2"
          >
            {locale === 'de' ? 'Mehr entdecken' : 'Discover more'}
          </motion.span>
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.button>
      </motion.div>
    </section>
  );
}
