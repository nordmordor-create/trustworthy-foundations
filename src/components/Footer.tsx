const Footer = () => {
  return (
    <footer className="py-8 bg-graphite text-graphite-foreground border-t border-graphite-foreground/10">
      <div className="container-main">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col items-center md:items-start">
            <span className="font-semibold">СК Максима Терехичева</span>
            <span className="text-sm opacity-60">Инженерное частное домостроение</span>
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
