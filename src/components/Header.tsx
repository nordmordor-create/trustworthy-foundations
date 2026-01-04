import { Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container-main flex items-center justify-between h-16 md:h-20">
        <a href="#" className="flex items-center gap-3">
          <img src={logo} alt="СК Максима Терехичева" className="h-10 md:h-12 w-auto" />
          <div className="flex flex-col">
            <span className="text-base md:text-lg font-semibold text-foreground tracking-tight">
              СК Максима Терехичева
            </span>
            <span className="text-xs text-muted-foreground hidden sm:block">
              Инженерное домостроение
            </span>
          </div>
        </a>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            О компании
          </a>
          <a href="#approach" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Как мы строим
          </a>
          <a href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Проекты
          </a>
          <a href="#contacts" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Контакты
          </a>
        </nav>

        <a 
          href="tel:+79991234567" 
          className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition-colors"
        >
          <Phone className="w-4 h-4" />
          <span className="hidden sm:inline">+7 (999) 123-45-67</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
