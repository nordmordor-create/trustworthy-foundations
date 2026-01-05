import founderImage from "@/assets/founder.jpg";

const About = () => {
  const principles = [
    {
      title: "Инженерный подход",
      description: "Каждое решение основано на расчетах и проверенных методах"
    },
    {
      title: "Соблюдение стандартов",
      description: "Все работы выполняются согласно СНиП и современным нормам"
    },
    {
      title: "Внимание к деталям",
      description: "От фундамента до отделки — контроль каждого этапа"
    },
    {
      title: "Уважение к клиенту",
      description: "Честные сроки, прозрачные цены, открытый диалог"
    }
  ];

  return (
    <section id="about" className="section-spacing bg-secondary/30">
      <div className="container-main">
        <div className="text-center mb-12">
          <div className="accent-line mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Наши принципы
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Founder photo */}
          <div className="relative order-2 lg:order-1">
            <img 
              src={founderImage} 
              alt="Максим Терехичев — основатель компании" 
              className="w-full max-w-md mx-auto rounded-xl shadow-lg"
            />
            <div className="absolute -bottom-4 -right-4 bg-graphite text-graphite-foreground p-4 rounded-lg hidden md:block">
              <div className="text-lg font-bold">Максим Терехичев</div>
              <div className="text-sm opacity-80">Основатель компании</div>
            </div>
          </div>

          {/* Principles */}
          <div className="order-1 lg:order-2">
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Строительная компания Максима Терехичева — это системный подход к частному жилью.
              Мы создаем проекты, объединенные едиными принципами.
            </p>
            
            <div className="space-y-6">
              {principles.map((principle, index) => (
                <div 
                  key={index}
                  className="flex gap-4 p-4 bg-card rounded-lg border border-border"
                >
                  <div className="w-10 h-10 rounded-full bg-accent/10 text-accent flex items-center justify-center font-bold shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {principle.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {principle.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
