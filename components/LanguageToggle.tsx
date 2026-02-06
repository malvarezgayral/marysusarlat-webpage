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
    const newLang = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="fixed top-6 right-6 z-50 bg-background/80 backdrop-blur-sm border border-foreground/20 rounded-full px-4 py-2 text-sm font-sans font-medium hover:bg-background hover:border-accent shadow-lg transition-all text-foreground"
      aria-label="Toggle Language"
    >
      {i18n.language === 'es' ? 'EN' : 'ES'}
    </button>
  );
}
