import house80 from "@/assets/house-80.jpg";
import house100 from "@/assets/house-100.jpg";
import house120 from "@/assets/house-120.jpg";
import house80Interior from "@/assets/house-80-interior.jpg";
import house100Interior from "@/assets/house-100-interior.jpg";
import house120Interior from "@/assets/house-120-interior.jpg";
import villageBoldino from "@/assets/village-boldino.jpg";
import villageKrp from "@/assets/village-krp.jpg";
import { ArrowRight, ExternalLink, Ruler, Home, Thermometer, Zap } from "lucide-react";

const Projects = () => {
  const houses = [
    {
      images: [house80, house80Interior],
      area: "80 м²",
      price: "от 7 млн ₽",
      description: "Компактный дом для семьи",
      specs: {
        rooms: "3 комнаты",
        floors: "1 этаж",
        heating: "Газовое",
        electricity: "15 кВт"
      },
      avitoLink: null
    },
    {
      images: [house100, house100Interior],
      area: "100 м²",
      price: "от 8,5 млн ₽",
      description: "Просторный семейный дом",
      specs: {
        rooms: "4 комнаты",
        floors: "2 этажа",
        heating: "Газовое",
        electricity: "15 кВт"
      },
      avitoLink: "https://avito.ru"
    },
    {
      images: [house120, house120Interior],
      area: "120 м²",
      price: "от 10 млн ₽",
      description: "Премиальный проект с панорамными окнами",
      specs: {
        rooms: "5 комнат",
        floors: "2 этажа",
        heating: "Газовое",
        electricity: "15 кВт"
      },
      avitoLink: "https://avito.ru"
    }
  ];

  const villages = [
    {
      name: "Болдино Life",
      image: villageBoldino,
      description: "Современный коттеджный поселок в 20 минутах от Перми. Развитая инфраструктура, асфальтированные дороги, центральные коммуникации. Идеально для семей, ценящих комфорт и природу.",
      features: ["Газификация", "Центральное водоснабжение", "Асфальтированные дороги", "Детская площадка"],
      status: "Актуально"
    },
    {
      name: "КРП",
      image: villageKrp,
      description: "Перспективный проект с продуманной планировкой территории. Участки от 8 соток, все коммуникации подведены. Удобный выезд на федеральную трассу.",
      features: ["Электричество 15 кВт", "Скважина", "Асфальт до участка", "Охраняемая территория"],
      status: "Актуально"
    }
  ];

  return (
    <section id="projects" className="section-spacing bg-secondary/30">
      <div className="container-main">
        <div className="text-center mb-16">
          <div className="accent-line mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Примеры домов
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Свободная планировка. Индивидуальный подход к каждому проекту.
          </p>
        </div>

        {/* House cards */}
        <div className="space-y-12 mb-20">
          {houses.map((house, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Images */}
                <div className="grid grid-cols-2 gap-2 p-2">
                  {house.images.map((img, imgIndex) => (
                    <div key={imgIndex} className="aspect-[4/3] overflow-hidden rounded-lg">
                      <img 
                        src={img} 
                        alt={`Дом ${house.area} - фото ${imgIndex + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
                
                {/* Info */}
                <div className="p-6 lg:p-8 flex flex-col justify-center">
                  <div className="flex items-baseline justify-between mb-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                      Дом {house.area}
                    </h3>
                    <span className="text-xl font-semibold text-accent">
                      {house.price}
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    {house.description}
                  </p>
                  
                  {/* Specs */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2 text-sm">
                      <Home className="w-4 h-4 text-accent" />
                      <span className="text-foreground">{house.specs.rooms}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Ruler className="w-4 h-4 text-accent" />
                      <span className="text-foreground">{house.specs.floors}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Thermometer className="w-4 h-4 text-accent" />
                      <span className="text-foreground">{house.specs.heating}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Zap className="w-4 h-4 text-accent" />
                      <span className="text-foreground">{house.specs.electricity}</span>
                    </div>
                  </div>
                  
                  {house.avitoLink && (
                    <a 
                      href={house.avitoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-medium"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Смотреть на Авито
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Villages */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8">
            Проекты поселков
          </h3>
          <div className="space-y-8">
            {villages.map((village, index) => (
              <div 
                key={index}
                className="bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300"
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="aspect-[16/10] lg:aspect-auto overflow-hidden">
                    <img 
                      src={village.image} 
                      alt={village.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 lg:p-8">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-2xl font-semibold text-foreground">
                        {village.name}
                      </h4>
                      <span className="text-sm bg-accent/10 text-accent px-3 py-1 rounded-full">
                        {village.status}
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {village.description}
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {village.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                          <span className="text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
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
