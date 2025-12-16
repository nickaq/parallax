'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  icon: ReactNode;
  index?: number;
}

export default function ServiceCard({ title, description, href, icon, index = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Link href={href} className="block group">
        <div className="relative p-8 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-[#7388a6]/20 transition-all duration-300 hover:-translate-y-1">
          {/* Icon */}
          <div className="w-14 h-14 bg-[#7388a6]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#7388a6] transition-colors duration-300">
            <div className="text-[#7388a6] group-hover:text-white transition-colors duration-300">
              {icon}
            </div>
          </div>

          {/* Content */}
          <h3 className="text-xl font-semibold text-slate-800 mb-3 group-hover:text-[#7388a6] transition-colors">
            {title}
          </h3>
          <p className="text-slate-600 leading-relaxed">
            {description}
          </p>

          {/* Arrow */}
          <div className="mt-6 flex items-center text-[#7388a6] font-medium">
            <span className="text-sm">Mehr erfahren</span>
            <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
