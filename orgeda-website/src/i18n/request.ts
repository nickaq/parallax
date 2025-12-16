import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import de from '../messages/de.json';
import en from '../messages/en.json';

export const locales = ['de', 'en'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'de';

const messagesByLocale = { de, en };

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale;

  if (!locale || !locales.includes(locale as Locale)) {
    notFound();
  }

  return {
    locale,
    messages: messagesByLocale[locale as Locale]
  };
});
