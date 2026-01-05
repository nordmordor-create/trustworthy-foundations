const Footer = () => {
  return (
    <footer className="py-8 bg-graphite text-graphite-foreground border-t border-graphite-foreground/10">
      <div className="container-main">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start">
            <span className="font-semibold">СК Максима Терехичева</span>
            <span className="text-sm opacity-60">Инженерное частное домостроение</span>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-sm opacity-60">
            <a href="#" className="hover:opacity-100 transition-opacity">
              Политика обработки персональных данных
            </a>
            <span className="hidden md:inline">|</span>
            <span>ИП Терехичев М.А.</span>
            <span className="hidden md:inline">|</span>
            <span>ИНН 590123456789</span>
          </div>
          
          <div className="text-sm opacity-60">
            © {new Date().getFullYear()} Все права защищены
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
