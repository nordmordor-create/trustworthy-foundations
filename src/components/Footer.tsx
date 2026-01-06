const Footer = () => {
  return (
    <footer className="py-10 bg-graphite text-graphite-foreground border-t border-graphite-foreground/10">
      <div className="container-main">
        <div className="text-center space-y-4">
          <div>
            <span className="font-semibold text-lg">СК Максима Терехичева</span>
          </div>
          
          <div className="text-sm opacity-70">
            Инженерное частное домостроение
          </div>
          
          <div className="text-sm opacity-60">
            ИП Терехичев М.А. | ИНН 590123456789 | ОГРНИП 123456789012345
          </div>
          
          <div>
            <a href="#" className="text-sm opacity-60 hover:opacity-100 transition-opacity underline">
              Политика обработки персональных данных
            </a>
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
