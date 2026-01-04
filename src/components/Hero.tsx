import heroImage from "@/assets/hero-house.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
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
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Строительная Компания Максима Терехичева
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-xl">
            Частные качественные дома для жизни в 20 минутах от г.Пермь
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contacts" 
              className="inline-flex items-center justify-center px-8 py-4 bg-accent text-accent-foreground font-medium rounded-lg hover:bg-accent/90 transition-colors"
            >
              Обсудить проект
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
