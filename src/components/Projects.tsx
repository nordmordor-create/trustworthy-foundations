import house80 from "@/assets/house-80.jpg";
import house100 from "@/assets/house-100.jpg";
import house120 from "@/assets/house-120.jpg";
import { ArrowRight } from "lucide-react";

const Projects = () => {
  const houses = [
    {
      image: house80,
      area: "80 м²",
      price: "от 7 млн ₽",
      description: "Компактный дом для семьи"
    },
    {
      image: house100,
      area: "100 м²",
      price: "от 8,5 млн ₽",
      description: "Просторный семейный дом"
    },
    {
      image: house120,
      area: "120 м²",
      price: "от 10 млн ₽",
      description: "Премиальный проект"
    }
  ];

  const villages = [
    {
      name: "Болдино Life",
      description: "Современный поселок, 20 минут от Перми",
      status: "Актуально"
    },
    {
      name: "КРП",
      description: "Актуальный проект, 20 минут от Перми",
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
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {houses.map((house, index) => (
            <div 
              key={index}
              className="group bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={house.image} 
                  alt={`Дом ${house.area}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="text-2xl font-bold text-foreground">
                    Дом {house.area}
                  </h3>
                  <span className="text-lg font-semibold text-accent">
                    {house.price}
                  </span>
                </div>
                <p className="text-muted-foreground">
                  {house.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Villages */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-6">
            Проекты
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {villages.map((village, index) => (
              <div 
                key={index}
                className="group card-architectural flex items-center justify-between"
              >
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-1">
                    {village.name}
                  </h4>
                  <p className="text-muted-foreground">
                    {village.description}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm bg-accent/10 text-accent px-3 py-1 rounded-full">
                    {village.status}
                  </span>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
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
