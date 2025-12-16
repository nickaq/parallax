'use client';

import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { motion } from 'framer-motion';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactForm() {
  const t = useTranslations('contact');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      console.log('Form data:', data);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      reset();
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 sm:space-y-6"
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1 sm:mb-2">
          {t('name')} *
        </label>
        <input
          type="text"
          id="name"
          {...register('name', { required: true })}
          className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border text-base ${
            errors.name ? 'border-red-500' : 'border-slate-200'
          } focus:outline-none focus:ring-2 focus:ring-[#7388a6] focus:border-transparent transition-all`}
          placeholder="Max Mustermann"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1 sm:mb-2">
          {t('email')} *
        </label>
        <input
          type="email"
          id="email"
          {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
          className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border text-base ${
            errors.email ? 'border-red-500' : 'border-slate-200'
          } focus:outline-none focus:ring-2 focus:ring-[#7388a6] focus:border-transparent transition-all`}
          placeholder="max@beispiel.de"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1 sm:mb-2">
          {t('phone')}
        </label>
        <input
          type="tel"
          id="phone"
          {...register('phone')}
          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-slate-200 text-base focus:outline-none focus:ring-2 focus:ring-[#7388a6] focus:border-transparent transition-all"
          placeholder="+49 123 456789"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1 sm:mb-2">
          {t('message')} *
        </label>
        <textarea
          id="message"
          rows={4}
          {...register('message', { required: true })}
          className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border text-base ${
            errors.message ? 'border-red-500' : 'border-slate-200'
          } focus:outline-none focus:ring-2 focus:ring-[#7388a6] focus:border-transparent transition-all resize-none`}
          placeholder="Ihre Nachricht..."
        />
      </div>

      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-[#7388a6] text-white font-semibold rounded-lg hover:bg-[#5f7291] transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl text-sm sm:text-base"
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Senden...
          </span>
        ) : (
          t('submit')
        )}
      </motion.button>

      {submitStatus === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-3 sm:p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm sm:text-base"
        >
          {t('success')}
        </motion.div>
      )}

      {submitStatus === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-3 sm:p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm sm:text-base"
        >
          {t('error')}
        </motion.div>
      )}
    </motion.form>
  );
}
