import { Shield, Clock, FileCheck, Landmark, Award, FileText, Star } from "lucide-react";

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

  const documents = [
    {
      icon: <Award className="w-8 h-8" />,
      type: "Сертификат",
      title: "ISO 9001:2015",
      description: "Система менеджмента качества"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      type: "Лицензия",
      title: "СРО №12345",
      description: "Допуск к строительным работам"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      type: "Гарантия",
      title: "5 лет",
      description: "На все строительные работы"
    }
  ];

  const testimonials = [
    {
      text: "Благодарю команду СК Максима Терехичева за качественно построенный дом. Все сроки соблюдены, качество на высоте.",
      author: "Семья Ивановых",
      location: "п. Болдино Life"
    },
    {
      text: "Выбрали эту компанию по рекомендации друзей и не пожалели. Профессиональный подход, честные цены.",
      author: "Алексей П.",
      location: "КРП"
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

        {/* Key reasons */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="text-center p-8 bg-secondary/30 rounded-xl"
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

        {/* Certificates & Licenses */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Сертификаты и лицензии
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {documents.map((doc, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-accent/10 text-accent flex items-center justify-center mx-auto mb-4">
                  {doc.icon}
                </div>
                <div className="text-sm text-muted-foreground mb-1">{doc.type}</div>
                <h4 className="text-xl font-bold text-foreground mb-2">{doc.title}</h4>
                <p className="text-sm text-muted-foreground">{doc.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Благодарности клиентов
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-xl p-8"
              >
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
