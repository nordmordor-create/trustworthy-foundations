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
            Инженерное частное домостроение
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-xl">
            Мы строим дома, в которых хочется жить долго. Не эксперимент. Не компромисс. 
            А надежная основа для жизни семьи.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
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

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-1">от 80 м²</div>
              <div className="text-sm text-muted-foreground">Частные дома</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-1">от 7 млн</div>
              <div className="text-sm text-muted-foreground">Стоимость</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-1">15+</div>
              <div className="text-sm text-muted-foreground">Лет опыта</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-1">20 мин</div>
              <div className="text-sm text-muted-foreground">От Перми</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
