import { CheckCircle } from "lucide-react";
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
      description: "Проектирование под конкретные условия участка. Ленточный или монолитный фундамент с полной гидроизоляцией."
    },
    {
      image: stepWalls,
      number: "02",
      title: "Стены — пеноблок",
      description: "Надежный материал с отличными теплоизоляционными свойствами. Толщина стен 400 мм для комфортного микроклимата."
    },
    {
      image: stepRoof,
      number: "03",
      title: "Кровля",
      description: "Металлочерепица или мягкая кровля. Полная теплоизоляция и вентиляция подкровельного пространства."
    },
    {
      image: stepUtilities,
      number: "04",
      title: "Коммуникации",
      description: "Электричество 15 кВт, водоснабжение, канализация. Полная разводка по дому под ключ."
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

        {/* Visual Steps Timeline */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2 z-0" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="relative bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300 z-10"
              >
                <div className="aspect-square overflow-hidden bg-secondary/30">
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-full h-full object-contain p-4"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl font-bold text-accent">{step.number}</span>
                    <h3 className="text-lg font-semibold text-foreground">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Format section */}
        <div className="mt-20 bg-secondary/50 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-foreground mb-8">
            Формат домов
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Частные дома от 80 м²",
              "Участки от 8 соток",
              "White box — чистая база для жизни",
              "Возможен ремонт под ключ"
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
