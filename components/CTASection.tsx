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
    <section id={id} className={`w-full flex flex-col items-center justify-center text-center px-4 ${className}`}>
      <h2 className="text-4xl md:text-5xl text-foreground mb-6 max-w-2xl">
        {title}
      </h2>
      <Link 
        href={linkHref}
        className="text-lg border-b border-foreground hover:scale-105 transition-scale duration-300 text-foreground"
      >
        {linkText}
      </Link>
    </section>
  );
}
