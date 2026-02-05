export function AboutSection() {
  return (
    <section id="about" className="w-full max-w-6xl px-4 md:px-8 py-24 flex flex-col md:flex-row items-center gap-12 md:gap-16">
      <div className="w-full md:w-5/12 aspect-square bg-stone-300 shadow-xl">
        {/* Placeholder for Profile Image */}
      </div>
      
      <div className="w-full md:w-7/12">
        <h2 className="font-serif text-5xl md:text-6xl text-stone-900 mb-6">
          María Susana Apellido
        </h2>
        <p className="text-lg leading-relaxed text-stone-700 mb-4">
          Biografía breve lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Etiam volutpat massa sit amet euismod ultrices. Vestibulum ante ipsum primis 
          in faucibus orci luctus et ultrices.
        </p>
        <p className="text-lg leading-relaxed text-stone-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam volutpat massa 
          sit amet euismod ultrices. Vestibulum ante ipsum primis in faucibus orci luctus.
        </p>
      </div>
    </section>
  );
}
