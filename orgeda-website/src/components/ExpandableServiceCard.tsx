'use client';

import { memo, useCallback, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface ServiceDetail {
  title: string;
  icon: React.ReactNode;
  shortDescription: string;
  fullDescription: string;
  features: string[];
}

interface ExpandableServiceCardProps {
  service: ServiceDetail;
  index: number;
  bgColor?: string;
}

// Optimized modal animation variants - smoother
const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.96, y: 30 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { 
      type: "tween" as const,
      duration: 0.35,
      ease: [0.4, 0, 0.2, 1] as const  // Material Design easing
    }
  },
  exit: { 
    opacity: 0, 
    scale: 0.96, 
    y: 30,
    transition: { 
      duration: 0.25,
      ease: [0.4, 0, 1, 1] as const
    }
  }
};

const ExpandableServiceCard = memo(function ExpandableServiceCard({ 
  service, 
  index, 
  bgColor = 'bg-white' 
}: ExpandableServiceCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = useCallback(() => setIsOpen(true), []);
  const handleClose = useCallback(() => setIsOpen(false), []);
  
  const handleContactClick = useCallback(() => {
    handleClose();
    setTimeout(() => {
      document.querySelector('#kontakt')?.scrollIntoView({ behavior: 'smooth' });
    }, 200);
  }, [handleClose]);

  return (
    <>
      {/* Card - simplified animation */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: index * 0.08, ease: [0.4, 0, 0.2, 1] }}
        whileHover={{ y: -6, boxShadow: "0 12px 32px -8px rgba(0,0,0,0.12)" }}
        onClick={handleOpen}
        className={`p-6 ${bgColor} rounded-xl border border-slate-100 cursor-pointer transition-all duration-300 hover:border-[#7388a6]/30`}
      >
        <div className="w-12 h-12 bg-[#7388a6]/10 rounded-lg flex items-center justify-center mb-4 text-[#7388a6]">
          {service.icon}
        </div>
        <h3 className="font-semibold text-slate-800 mb-2">{service.title}</h3>
        <p className="text-sm text-slate-500 line-clamp-2">{service.shortDescription}</p>
        <div className="mt-4 flex items-center text-sm text-[#7388a6] font-medium group-hover:text-[#5f7291]">
          <span>Mehr erfahren</span>
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </motion.div>

      {/* Modal - optimized */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={handleClose}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
            />
            
            {/* Modal Content */}
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-4 sm:inset-8 md:inset-16 lg:inset-24 xl:inset-32 bg-white rounded-2xl shadow-2xl z-50 overflow-hidden flex flex-col max-h-[90vh]"
            >
              {/* Header */}
              <div className="flex items-start justify-between p-4 sm:p-6 border-b border-slate-100 shrink-0">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#7388a6]/10 rounded-xl flex items-center justify-center text-[#7388a6]">
                    {service.icon}
                  </div>
                  <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-800 pr-8">{service.title}</h2>
                </div>
                <button
                  onClick={handleClose}
                  className="p-2 hover:bg-slate-100 rounded-full transition-colors absolute top-4 right-4"
                  aria-label="Schließen"
                >
                  <XMarkIcon className="w-5 h-5 sm:w-6 sm:h-6 text-slate-500" />
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-4 sm:p-6">
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6">
                  {service.fullDescription}
                </p>

                <h3 className="text-base sm:text-lg font-semibold text-slate-800 mb-4">
                  Unsere Leistungen im Detail:
                </h3>

                <ul className="space-y-2 sm:space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-[#7388a6]/10 rounded-full flex items-center justify-center mr-2 sm:mr-3 mt-0.5">
                        <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#7388a6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-sm sm:text-base text-slate-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer */}
              <div className="p-4 sm:p-6 border-t border-slate-100 bg-slate-50 shrink-0">
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={handleContactClick}
                    className="flex-1 px-5 py-2.5 sm:py-3 bg-[#7388a6] text-white font-semibold rounded-lg hover:bg-[#5f7291] transition-colors text-sm sm:text-base"
                  >
                    Kontakt aufnehmen
                  </button>
                  <button
                    onClick={handleClose}
                    className="flex-1 px-5 py-2.5 sm:py-3 border border-slate-200 text-slate-600 font-semibold rounded-lg hover:bg-slate-100 transition-colors text-sm sm:text-base"
                  >
                    Schließen
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
});

export default ExpandableServiceCard;
