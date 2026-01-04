import { Layers, Home, Zap, Droplets, CheckCircle } from "lucide-react";

const Approach = () => {
  const features = [
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Стены — пеноблок",
      description: "Надежный материал с отличными теплоизоляционными свойствами"
    },
    {
      icon: <Home className="w-6 h-6" />,
      title: "Надежный фундамент",
      description: "Проектирование под конкретные условия участка"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Электричество 15 кВт",
      description: "Полноценное подключение к электросетям"
    },
    {
      icon: <Droplets className="w-6 h-6" />,
      title: "Вода и асфальт",
      description: "Коммуникации и подъезд до участка"
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="card-architectural flex flex-col items-start"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
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
