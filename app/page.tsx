'use client';

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BookSection } from "@/components/BookSection";
import { CTASection } from "@/components/CTASection";
import { AboutSection } from "@/components/AboutSection";
import { ContactForm } from "@/components/ContactForm";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen flex flex-col items-center w-full bg-background overflow-x-hidden text-foreground">
      <Header />
      
      {/* Wave Separator 1 */}
      <div className="w-full h-12 md:h-24 bg-white rounded-t-[50%] md:rounded-t-[80%] -mb-8 md:-mb-12 z-0 relative transform scale-x-125 opacity-40"></div>
      
      <div id="books" className="flex flex-col w-full items-center gap-12 py-12 relative z-10">
        <BookSection 
          title={t('book.title')}
          description={t('book.description')}
          imageAlt="Cover of Book 1"
          getItText={t('book.get_it')}
        />
        <BookSection 
          title={t('book.title')}
          description={t('book.description')}
          imageAlt="Cover of Book 2"
          reverse
          getItText={t('book.get_it')}
        />
        <BookSection 
          title={t('book.title')}
          description={t('book.description')}
          imageAlt="Cover of Book 3"
          getItText={t('book.get_it')}
        />
      </div>

      {/* Wavy Background CTA Section */}
      <div className="w-full relative py-16 md:py-20 mt-8 md:mt-12">
        <div className="absolute inset-0 bg-white transform -skew-y-2 opacity-50 z-0 scale-110"></div>
        <div className="relative z-10 flex flex-col gap-16">
          <CTASection 
            id="interviews"
            title={t('cta.interviews.title')}
            linkText={t('cta.interviews.link')}
            linkHref="#"
          />
          <CTASection 
            id="travels"
            title={t('cta.travels.title')}
            linkText={t('cta.travels.link')}
            linkHref="#"
          />
        </div>
      </div>

      <div className="bg-stone-100/50 w-full flex justify-center py-20 relative">
         <div className="absolute top-0 left-0 w-full h-16 bg-white rounded-b-[50%] md:rounded-b-[80%] z-10 transform scale-x-125"></div>
         <AboutSection />
      </div>

      {/* Contact Section */}
      <section id="contact" className="w-full max-w-2xl px-4 md:px-8 pb-24 pt-12 flex flex-col items-center">
         <h2 className="font-display text-5xl md:text-6xl text-foreground mb-8 md:mb-12 text-center">
            {t('contact.title')}
         </h2>
         <ContactForm />
      </section>

      <Footer />
    </main>
  );
}
