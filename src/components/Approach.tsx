import stepFoundation from "@/assets/step-foundation.jpg";
import stepWalls from "@/assets/step-walls.jpg";
import stepRoof from "@/assets/step-roof.jpg";
import stepUtilities from "@/assets/step-utilities.jpg";
import stepFacade from "@/assets/step-facade.jpg";
import stepWindows from "@/assets/step-windows.jpg";
import stepFinishing from "@/assets/step-finishing.jpg";
import stepLandscaping from "@/assets/step-landscaping.jpg";

const Approach = () => {
  const steps = [
    {
      image: stepFoundation,
      number: "01",
      title: "Фундамент",
      description: "Утепленная монолитная шведская плита в соответствии с геологией участка."
    },
    {
      image: stepWalls,
      number: "02",
      title: "Стены",
      description: "Сертифицированный газоблок 400 мм, с облицовкой вентиляционным фасадом."
    },
    {
      image: stepRoof,
      number: "03",
      title: "Кровля",
      description: "Скатная кровля Кликфальц из металлочерепицы, плоская ПВХ мембрана."
    },
    {
      image: stepUtilities,
      number: "04",
      title: "Инженерия",
      description: "Слаботочные сети и электрика, водоснабжение и водоотведение, вентиляция."
    },
    {
      image: stepFacade,
      number: "05",
      title: "Фасад",
      description: "Вентилируемый, с облицовкой окрашенным планкеном в заводских условиях."
    },
    {
      image: stepWindows,
      number: "06",
      title: "Окна",
      description: "ExproF, KBE, Rehau (70 мм). Двухкамерные с низкоэмиссионным стеклом."
    },
    {
      image: stepFinishing,
      number: "07",
      title: "Отделка",
      description: "Все возможные виды: от теплого контура до полностью готового интерьера."
    },
    {
      image: stepLandscaping,
      number: "08",
      title: "Благоустройство",
      description: "Строительство заборов, устройство дорожек и парковочных зон, озеленение участка."
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={step.image} 
                  alt={step.title}
                  className="w-full h-full object-cover"
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
