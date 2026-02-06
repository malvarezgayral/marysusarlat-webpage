'use client';

import Link from 'next/link';
import { FlowerDivider } from './FlowerDivider';
import { useTranslation } from 'react-i18next';

export function Header() {
  const { t } = useTranslation();

  const navItems = [
    { name: t('header.nav.books'), href: '#books' },
    { name: t('header.nav.interviews'), href: '#interviews' },
    { name: t('header.nav.travels'), href: '#travels' },
    { name: t('header.nav.about'), href: '#about' },
    { name: t('header.nav.contact'), href: '#contact' },
  ];

  return (
    <header className="w-full pt-8 md:pt-12 pb-4 md:pb-8 px-4 flex flex-col items-center bg-transparent z-10">
      <div className="text-center mb-4">
        <h1 className="text-6xl md:text-8xl font-display text-foreground">
          {t('header.title')}
        </h1>
      </div>
      
      <FlowerDivider className="mb-6 md:mb-8" />
      
      <nav className="flex flex-wrap justify-center gap-6 md:gap-12">
        {navItems.map((item) => (
          <Link 
            key={item.href}
            href={item.href} 
            className="text-lg font-sans text-foreground hover:text-stone-600 transition-colors"
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </header>
  );
}
