import houseDetail from "@/assets/house-detail.jpg";

const About = () => {
  return (
    <section id="about" className="section-spacing bg-secondary/30">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <div className="accent-line mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Сущность компании
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Строительная компания Максима Терехичева — это системный подход к частному жилью.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Мы создаем проекты, объединенные едиными принципами: инженерия, стандарты, 
              внимание к деталям и уважение к будущим владельцам.
            </p>
            <p className="text-xl font-medium text-foreground italic">
              Проекты меняются. Подход остается.
            </p>
          </div>
          
          <div className="relative">
            <img 
              src={houseDetail} 
              alt="Архитектурные детали" 
              className="w-full rounded-xl shadow-lg"
            />
            <div className="absolute -bottom-6 -left-6 bg-graphite text-graphite-foreground p-6 rounded-lg hidden md:block">
              <div className="text-2xl font-bold mb-1">СНиП</div>
              <div className="text-sm opacity-80">Соответствие стандартам</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
