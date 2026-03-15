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
        <h1 className="text-6xl md:text-8xl text-foreground">
          {t('header.title')}
        </h1>
      </div>

      <FlowerDivider className="mb-6 md:mb-8" />

      <nav className="flex flex-wrap justify-center gap-6 md:gap-12">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-2xl font-serif text-foreground relative pb-1
                        after:absolute
                        after:left-0
                        after:bottom-0
                        after:h-[1px]
                        after:w-full
                        after:bg-foreground
                        after:origin-center
                        after:scale-x-0
                        after:transition-transform
                        after:duration-500
                        after:ease-out
                        hover:after:scale-x-100
                        hover:scale-105
                        transition-all origin-center
                        duration-300
                      "
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </header>
  );
}
