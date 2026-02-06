'use client';

import { useTranslation } from 'react-i18next';

export function AboutSection() {
  const { t } = useTranslation();

  return (
    <section id="about" className="w-full max-w-6xl px-4 md:px-8 py-24 flex flex-col md:flex-row items-center gap-12 md:gap-16">
      <div className={`w-full md:w-5/12 aspect-square bg-stone-300 shadow-xl`} aria-label="Profile Image">
        {/* Placeholder for Profile Image */}
      </div>
      
      <div className="w-full md:w-7/12">
        <h2 className="font-display text-5xl md:text-6xl text-foreground mb-6">
          {t('about.title')}
        </h2>
        <p className="text-base md:text-lg leading-relaxed text-foreground/80 mb-4 font-sans">
          {t('about.desc_1')}
        </p>
        <p className="text-base md:text-lg leading-relaxed text-foreground/80 font-sans">
          {t('about.desc_2')}
        </p>
      </div>
    </section>
  );
}
