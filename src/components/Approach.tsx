import stepFoundation from "@/assets/step-foundation.jpg";
import stepWalls from "@/assets/step-walls.jpg";
import stepRoof from "@/assets/step-roof.jpg";
import stepUtilities from "@/assets/step-utilities.jpg";

const Approach = () => {
  const steps = [
    {
      image: stepFoundation,
      number: "01",
      title: "Фундамент",
      description: "Проектирование под условия участка. Ленточный или монолитный."
    },
    {
      image: stepWalls,
      number: "02",
      title: "Стены",
      description: "Пеноблок 400 мм с отличной теплоизоляцией."
    },
    {
      image: stepRoof,
      number: "03",
      title: "Кровля",
      description: "Металлочерепица или мягкая кровля с утеплением."
    },
    {
      image: stepUtilities,
      number: "04",
      title: "Коммуникации",
      description: "Электричество, вода, канализация под ключ."
    },
    {
      image: stepFoundation,
      number: "05",
      title: "Отделка фасада",
      description: "Штукатурка, облицовочный кирпич или сайдинг."
    },
    {
      image: stepWalls,
      number: "06",
      title: "Окна и двери",
      description: "Металлопластиковые окна и входные двери."
    },
    {
      image: stepRoof,
      number: "07",
      title: "Внутренняя отделка",
      description: "Черновая или чистовая отделка на выбор."
    },
    {
      image: stepUtilities,
      number: "08",
      title: "Благоустройство",
      description: "Отмостка, дорожки, озеленение участка."
    }
  ];

  return (
    <section id="approach" className="section-spacing">
      <div className="container-main">
        <div className="text-center mb-16">
          <div className="accent-line mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Как мы строим
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Соответствие всем СНиП. Квалифицированные инженеры и рабочие.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden bg-secondary/30">
                <img 
                  src={step.image} 
                  alt={step.title}
                  className="w-full h-full object-contain p-3"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl font-bold text-accent">{step.number}</span>
                  <h3 className="text-sm md:text-base font-semibold text-foreground">
                    {step.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Approach;
