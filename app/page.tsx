
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BookSection } from "@/components/BookSection";
import { CTASection } from "@/components/CTASection";
import { AboutSection } from "@/components/AboutSection";
import { ContactForm } from "@/components/ContactForm";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center w-full bg-stone-50 overflow-x-hidden">
      <Header />
      
      {/* Wave Separator 1 */}
      <div className="w-full h-16 md:h-24 bg-white rounded-t-[50%] md:rounded-t-[80%] -mb-12 z-0 relative transform scale-x-125 opacity-40"></div>
      
      <div id="books" className="flex flex-col w-full items-center gap-12 py-12 relative z-10">
        <BookSection 
          title="Título del libro"
          description="Sinopsis del libro lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam volutpat massa sit amet euismod ultrices. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices."
          imageAlt="Cover of Book 1"
        />
        <BookSection 
          title="Título del libro"
          description="Sinopsis del libro lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam volutpat massa sit amet euismod ultrices."
          imageAlt="Cover of Book 2"
          reverse
        />
        <BookSection 
          title="Título del libro"
          description="Sinopsis del libro lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam volutpat massa sit amet euismod ultrices."
          imageAlt="Cover of Book 3"
        />
      </div>

      {/* Wavy Background CTA Section */}
      <div className="w-full relative py-20 mt-12">
        <div className="absolute inset-0 bg-white transform -skew-y-2 opacity-50 z-0 scale-110"></div>
        <div className="relative z-10 flex flex-col gap-16">
          <CTASection 
            id="interviews"
            title="¿Te interesa saber más de mis trabajos?"
            linkText="Escuchá mis entrevistas"
            linkHref="#"
          />
          <CTASection 
            id="travels"
            title="Recorramos el mundo juntos"
            linkText="Hablemos de mis viajes"
            linkHref="#"
          />
        </div>
      </div>

      <div className="bg-stone-100 w-full flex justify-center py-20 relative">
         <div className="absolute top-0 left-0 w-full h-16 bg-white rounded-b-[50%] md:rounded-b-[80%] z-10 transform scale-x-125"></div>
         <AboutSection />
      </div>

      {/* Contact Section */}
      <section id="contact" className="w-full max-w-2xl px-8 pb-24 pt-12 flex flex-col items-center">
         <h2 className="font-serif text-5xl md:text-6xl text-stone-900 mb-12 text-center">
            Contactame
         </h2>
         <ContactForm />
      </section>

      <Footer />
    </main>
  );
}
