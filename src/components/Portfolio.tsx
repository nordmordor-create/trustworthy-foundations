import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";

const Portfolio = () => {
  const projects = [
    {
      image: portfolio1,
      title: "Частный клубный дом с кинотеатром",
      description: "Премиальный проект частного кинозала с эргономичными креслами и профессиональным звуковым оборудованием. Реализована система затемнения и акустическая изоляция. Интерьер выполнен в современном минималистичном стиле с использованием тёмных тонов."
    },
    {
      image: portfolio2,
      title: "Гостевой дом в НОЦ «Энергетик»",
      description: "Гостевая спальня с панорамным остеклением и видом на сосновый лес. Использованы натуральные материалы: дерево, камень, текстиль. Продуманное освещение создаёт атмосферу уюта. Минималистичный дизайн подчёркивает связь с природой."
    },
    {
      image: portfolio3,
      title: "Дом отдыха Свердловского района",
      description: "Многофункциональное пространство для отдыха и работы с панорамными окнами. Интерьер сочетает деловую зону и зону релаксации. Большие окна обеспечивают естественное освещение и вид на зелёную территорию. Мебель подобрана для максимального комфорта."
    },
    {
      image: portfolio4,
      title: "Апартаменты в МФК «Москва»",
      description: "Решение «под ключ» для премиальных апартаментов с авторским дизайном. Кухня-гостиная оснащена встроенной техникой премиум-класса. Использованы эксклюзивные материалы: натуральный камень, ценные породы дерева. Функциональное зонирование и уникальные дизайнерские решения."
    },
    {
      image: portfolio5,
      title: "Гостевой дом в д. Нижнее Задолгое",
      description: "Современный барнхаус с панорамным остеклением в окружении леса. Тёмный фасад из окрашенного планкена гармонирует с природным ландшафтом. Открытая терраса для отдыха на свежем воздухе. Энергоэффективные технологии обеспечивают комфорт круглый год."
    },
    {
      image: portfolio6,
      title: "Перепланировка квартиры в Перми",
      description: "Полная перепланировка и дизайн интерьера городской квартиры. Объединённое пространство кухни-гостиной с современной мебелью. Светлая цветовая гамма визуально расширяет пространство. Использованы качественные отделочные материалы и продуманное освещение."
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
            Примеры реализованных проектов нашей компанией
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300 group"
            >
              <div className="aspect-[4/3] overflow-hidden">
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
                <p className="text-muted-foreground leading-relaxed text-sm">
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
