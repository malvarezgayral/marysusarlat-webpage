'use client';

import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

export function LanguageToggle() {
  const { i18n } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleLanguage = () => {
    const currentLang = i18n.language;
    let newLang = 'es';
    
    if (currentLang === 'es') {
      newLang = 'en';
    } else if (currentLang === 'en') {
      newLang = 'fr';
    } else {
      newLang = 'es';
    }
    
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="fixed cursor-pointer top-6 right-6 z-50 bg-[#6b6346] border border-foreground/20 rounded-full px-4 py-2 text-sm font-sans font-medium animate-blink-brown hover:border-accent shadow-lg transition-all text-foreground"
      aria-label="Toggle Language"
    >
      {i18n.language.toUpperCase()}
    </button>
  );
}
