import Link from 'next/link';

interface CTASectionProps {
  id: string;
  title: string;
  linkText: string;
  linkHref: string;
  className?: string; // For adding custom background shapes if needed
}

export function CTASection({ id, title, linkText, linkHref, className = "" }: CTASectionProps) {
  return (
    <section id={id} className={`w-full py-24 flex flex-col items-center justify-center text-center px-4 ${className}`}>
      <h2 className="font-serif text-4xl md:text-5xl text-stone-900 mb-6 max-w-2xl">
        {title}
      </h2>
      <Link 
        href={linkHref}
        className="text-lg border-b border-stone-800 pb-1 hover:text-stone-600 hover:border-stone-600 transition-colors"
      >
        {linkText}
      </Link>
    </section>
  );
}
