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
          
         
          
          <div className="text-sm opacity-60">
            <a href="data.docx">
              Политика обработки персональных данных
            </a><br />
            <a href="policy.docx">
              Политика конфиденциальности
            </a><br /><br />

            © 2026 Все права защищены
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
