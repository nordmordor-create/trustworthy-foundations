import heroImage from "@/assets/hero-house.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Современный частный дом" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
      </div>

      <div className="container-main relative z-10 py-20 md:py-32">
        <div className="max-w-2xl">
          <div className="accent-line mb-8" />
          
          <h1 className="font-bold mb-6 leading-tight">
            <span className="text-foreground block whitespace-nowrap text-[clamp(1.5rem,5vw,3.75rem)]">Строительная компания</span>
            <span className="text-accent block text-[clamp(1.5rem,5vw,3.75rem)]">Максима Терехичева</span>
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/80 mb-10 leading-relaxed max-w-xl font-medium">
            Качественные частные дома от 7 млн руб в 20 минутах езды от г.Пермь
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contacts" 
              className="inline-flex items-center justify-center px-8 py-4 bg-accent text-accent-foreground font-medium rounded-lg hover:bg-accent/90 transition-colors"
            >
              Оставить заявку
            </a>
            <a 
              href="#projects" 
              className="inline-flex items-center justify-center px-8 py-4 border border-border text-foreground font-medium rounded-lg hover:bg-secondary transition-colors"
            >
              Смотреть проекты
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
