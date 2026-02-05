import Link from 'next/link';
// Removed unused Button import

interface BookSectionProps {
  title: string;
  description: string;
  imageAlt: string;
  reverse?: boolean;
}

export function BookSection({ title, description, imageAlt, reverse = false }: BookSectionProps) {
  return (
    <section className="w-full max-w-6xl px-4 md:px-8 py-16 flex flex-col md:flex-row items-center gap-12 md:gap-24">
      {/* Image Block */}
      <div className={`w-full md:w-1/3 aspect-[3/4] bg-stone-500 shadow-xl ${reverse ? 'md:order-2' : ''}`} aria-label={imageAlt}>
        {/* Placeholder for Book Image */}
      </div>

      {/* Content Block */}
      <div className={`w-full md:w-2/3 flex flex-col items-start gap-4 ${reverse ? 'md:order-1' : ''}`}>
        <h2 className="font-serif text-5xl md:text-6xl text-stone-900">{title}</h2>
        <p className="text-lg leading-relaxed text-stone-800">
          {description}
        </p>
        <Link href="#" className="underline underline-offset-4 text-stone-600 hover:text-stone-900 mt-2">
          Conseguirlo
        </Link>
      </div>
    </section>
  );
}
