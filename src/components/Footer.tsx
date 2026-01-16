const Footer = () => {
  return (
    <footer className="py-10 bg-graphite text-graphite-foreground border-t border-graphite-foreground/10">
      <div className="container-main">
        <div className="text-center space-y-4">
          <div>
            <div className="font-semibold text-lg">Строительная компания</div>
            <div className="font-semibold text-lg">Максима Терехичева</div>
          </div>
          
          <div className="text-sm opacity-60">
            ИП Терехичев М.Е. | ИНН 165041540213
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
            <a href="#" className="text-sm opacity-60 hover:opacity-100 transition-opacity underline">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-sm opacity-60 hover:opacity-100 transition-opacity underline">
              Политика обработки персональных данных
            </a>
          </div>
          
          <div className="text-sm opacity-60">
            © 2026 Все права защищены
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
