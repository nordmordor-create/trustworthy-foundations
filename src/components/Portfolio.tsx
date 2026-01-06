import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";

const Portfolio = () => {
  const projects = [
    {
      image: portfolio1,
      title: "Дом в Болдино Life",
      description: "Двухэтажный дом 150 м² с панорамным остеклением и террасой. Отделка под ключ, благоустройство участка. Срок строительства — 8 месяцев."
    },
    {
      image: portfolio2,
      title: "Семейный дом в КРП",
      description: "Просторный дом 120 м² с деревянным фасадом и большой верандой. Газовое отопление, ландшафтный дизайн. Сдан в 2024 году."
    },
    {
      image: portfolio3,
      title: "Современный барнхаус",
      description: "Дом в стиле барнхаус 180 м² с темным фасадом и вторым светом. Панорамные окна, теплые полы, умный дом. Премиальная отделка."
    }
  ];

  return (
    <section id="portfolio" className="section-spacing bg-secondary/30">
      <div className="container-main">
        <div className="text-center mb-16">
          <div className="accent-line mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Наши проекты
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Примеры реализованных домов нашей компанией
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300 group"
            >
              <div className="aspect-[3/2] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
