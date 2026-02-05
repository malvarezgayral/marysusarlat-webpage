import Link from 'next/link';
import { FlowerDivider } from './FlowerDivider';

export function Header() {
  const navItems = [
    { name: 'Libros', href: '#books' },
    { name: 'Entrevistas', href: '#interviews' },
    { name: 'Viajes', href: '#travels' },
    { name: 'Sobre mí', href: '#about' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <header className="w-full pt-12 pb-8 px-4 flex flex-col items-center bg-transparent z-10">
      <div className="text-center mb-4">
        <h1 className="text-6xl md:text-8xl font-display text-stone-900">
          Mary Su Sarlat
        </h1>
      </div>
      
      <FlowerDivider className="mb-8" />
      
      <nav className="flex flex-wrap justify-center gap-6 md:gap-12">
        {navItems.map((item) => (
          <Link 
            key={item.name}
            href={item.href} 
            className="text-lg font-serif text-stone-900 hover:text-stone-600 transition-colors"
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </header>
  );
}
