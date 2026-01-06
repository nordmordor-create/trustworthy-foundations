import finishShell from "@/assets/finish-shell.jpg";
import finishWhitebox from "@/assets/finish-whitebox.jpg";
import finishComfort from "@/assets/finish-comfort.jpg";
import finishTurnkey from "@/assets/finish-turnkey.jpg";

const FinishingOptions = () => {
  const options = [
    {
      image: finishShell,
      number: "01",
      title: "Теплый контур без перегородок",
      description: "Полная свобода для творчества."
    },
    {
      image: finishWhitebox,
      number: "02",
      title: "White Box",
      description: "С перегородками, выполненной стяжкой и ровными стенами."
    },
    {
      image: finishComfort,
      number: "03",
      title: "Отделка класса комфорт",
      description: "Для экономии времени, финансов и нервов."
    },
    {
      image: finishTurnkey,
      number: "04",
      title: "Заехал и живи",
      description: "Мебель, техника, гараж, навес, терраса и озеленение."
    }
  ];

  return (
    <section className="section-spacing">
      <div className="container-main">
        <div className="text-center mb-16">
          <div className="accent-line mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Варианты отделки
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Выберите уровень готовности дома под ваши потребности
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {options.map((option, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300 group"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={option.image} 
                  alt={option.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl font-bold text-accent">{option.number}</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {option.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {option.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FinishingOptions;
