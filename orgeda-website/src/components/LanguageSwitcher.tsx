'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => switchLocale('de')}
        className={`px-2 py-1 text-sm font-medium rounded transition-colors ${
          locale === 'de'
            ? 'bg-[#7388a6] text-white'
            : 'text-slate-600 hover:text-[#7388a6]'
        }`}
      >
        DE
      </button>
      <button
        onClick={() => switchLocale('en')}
        className={`px-2 py-1 text-sm font-medium rounded transition-colors ${
          locale === 'en'
            ? 'bg-[#7388a6] text-white'
            : 'text-slate-600 hover:text-[#7388a6]'
        }`}
      >
        EN
      </button>
    </div>
  );
}
