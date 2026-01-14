import house80 from "@/assets/house-80.jpg";
import house100 from "@/assets/house-100.jpg";
import house120 from "@/assets/house-120.jpg";
import villageBoldino from "@/assets/village-boldino.jpg";
import villageKrp from "@/assets/village-krp.jpg";
import { ExternalLink, Bed, Bath, Zap, Flame } from "lucide-react";

const Projects = () => {
  const houses = [
    {
      image: house80,
      area: "85 м²",
      village: "Поселок КРП",
      price: "от 6 млн руб",
      description: "Идеальная альтернатива квартире",
      landIncluded: true,
      specs: [
        { icon: Bed, text: "3 спальни" },
        { icon: Bath, text: "1 санузел" },
        { icon: Zap, text: "15 кВт" },
        { icon: Flame, text: "Газ (скоро)" }
      ],
      avitoLink: "#"
    },
    {
      image: house100,
      area: "85 м²",
      village: "Поселок Болдино Life",
      price: "от 7 млн руб",
      description: "Идеальная альтернатива квартире",
      landIncluded: true,
      specs: [
        { icon: Bed, text: "3 спальни" },
        { icon: Bath, text: "1 санузел" },
        { icon: Zap, text: "15 кВт" },
        { icon: Flame, text: "Газ (скоро)" }
      ],
      avitoLink: "#"
    },
    {
      image: house120,
      area: "100 м²",
      village: "Поселок Болдино Life",
      price: "от 9 млн руб",
      description: "Идеальная альтернатива квартире",
      landIncluded: true,
      specs: [
        { icon: Bed, text: "3 спальни" },
        { icon: Bath, text: "2 санузла" },
        { icon: Zap, text: "15 кВт" },
        { icon: Flame, text: "Газ (скоро)" }
      ],
      avitoLink: "#"
    }
  ];

  const villages = [
    {
      name: "Болдино Life",
      image: villageBoldino,
      description: "Современный коттеджный поселок в 20 минутах от Перми. Развитая инфраструктура, асфальтированные дороги, центральные коммуникации. Идеально для семей, ценящих комфорт и природу.",
      features: ["Газификация", "Центральное водоснабжение", "Асфальтированные дороги", "Детская площадка"],
      status: "20 минут от Перми",
      websiteUrl: "#"
    },
    {
      name: "КРП",
      image: villageKrp,
      description: "Перспективный проект с продуманной планировкой территории. Участки от 8 соток, все коммуникации подведены. Удобный выезд на федеральную трассу.",
      features: ["Электричество 15 кВт", "Скважина", "Асфальт до участка", "Охраняемая территория"],
      status: "20 минут от Перми",
      websiteUrl: "#"
    }
  ];

  return (
    <section id="projects" className="section-spacing bg-secondary/30">
      <div className="container-main">
        <div className="text-center mb-16">
          <div className="accent-line mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Дома в продаже
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Готовые проекты домов с участками в наших поселках
          </p>
        </div>

        {/* House cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {houses.map((house, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={house.image} 
                  alt={`Дом ${house.area}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-5">
                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="text-xl font-bold text-foreground">
                    Дом {house.area}
                  </h3>
                  <div className="text-xl font-semibold text-accent">
                    {house.price}
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground mb-2">
                  {house.village}
                </p>
                
                {house.landIncluded && (
                  <div className="inline-block text-xs bg-accent/10 text-accent px-2 py-1 rounded mb-3">
                    Участок входит в цену
                  </div>
                )}
                
                <p className="text-sm text-muted-foreground mb-4">
                  {house.description}
                </p>
                
                <div className="grid grid-cols-2 gap-2 text-xs text-foreground mb-4">
                  {house.specs.map((spec, specIndex) => (
                    <div key={specIndex} className="flex items-center gap-1 bg-secondary/50 px-2 py-1.5 rounded">
                      <spec.icon className="w-3 h-3 text-accent" />
                      <span>{spec.text}</span>
                    </div>
                  ))}
                </div>
                
                <a 
                  href={house.avitoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-medium text-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  Смотреть на Авито
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Villages */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8">
            Информация о поселках
          </h3>
          <div className="space-y-8">
            {villages.map((village, index) => (
              <div 
                key={index}
                className="bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="aspect-[16/10] md:aspect-auto overflow-hidden">
                    <img 
                      src={village.image} 
                      alt={village.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-5 md:p-6 lg:p-8">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                      <h4 className="text-xl md:text-2xl font-semibold text-foreground">
                        {village.name}
                      </h4>
                      <span className="text-xs md:text-sm bg-accent/10 text-accent px-3 py-1 rounded-full w-fit">
                        {village.status}
                      </span>
                    </div>
                    <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6 leading-relaxed">
                      {village.description}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3 mb-4 md:mb-6">
                      {village.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-center gap-2 text-xs md:text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                          <span className="text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <a 
                      href={village.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-medium text-sm md:text-base"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Официальный сайт
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;