import { Shield, Clock, FileCheck, Landmark } from "lucide-react";

const Trust = () => {
  const reasons = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "15+ лет опыта",
      description: "Проверенный временем подход к строительству"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Работа по стандартам",
      description: "Соответствие всем строительным нормам"
    },
    {
      icon: <FileCheck className="w-6 h-6" />,
      title: "Прозрачный процесс",
      description: "Понятные этапы и контроль качества"
    },
    {
      icon: <Landmark className="w-6 h-6" />,
      title: "Подходит для ипотеки",
      description: "Все документы для банковского одобрения"
    }
  ];

  return (
    <section className="section-spacing">
      <div className="container-main">
        <div className="text-center mb-16">
          <div className="accent-line mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Почему нам доверяют
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="text-center p-8"
            >
              <div className="w-14 h-14 rounded-full bg-graphite text-graphite-foreground flex items-center justify-center mx-auto mb-4">
                {reason.icon}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {reason.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trust;
