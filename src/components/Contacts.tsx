import { Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const Contacts = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name.trim() && formData.phone.trim()) {
      setIsDialogOpen(true);
      setFormData({ name: "", phone: "", message: "" });
    }
  };

  return (
    <section id="contacts" className="section-spacing bg-graphite text-graphite-foreground">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <div className="w-16 h-1 bg-accent rounded-full mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Оставить заявку
            </h2>
            <p className="text-lg opacity-80 mb-10 leading-relaxed">
              Частное домостроение с инженерным подходом. Свяжитесь с нами для консультации.
            </p>

            <div className="space-y-6">
              <a 
                href="tel:+79194406079"
                className="flex items-center gap-4 text-lg hover:text-accent transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <span>+7 (919) 440-60-79</span>
              </a>
              
              <a 
                href="mailto:mail@mtereh.ru"
                className="flex items-center gap-4 text-lg hover:text-accent transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <span>mail@mtereh.ru</span>
              </a>
              
              <div className="flex items-center gap-4 text-lg opacity-80">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <span>г.Пермь, ул.Монастырская, д.12, оф. 205</span>
              </div>
            </div>
          </div>

          <div className="bg-background/5 rounded-2xl p-8 md:p-10">
            <h3 className="text-xl font-semibold mb-6">
              Оставить заявку
            </h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <input 
                  type="text"
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-background/10 border border-graphite-foreground/20 rounded-lg text-graphite-foreground placeholder:text-graphite-foreground/50 focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <div>
                <input 
                  type="tel"
                  placeholder="Телефон"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-background/10 border border-graphite-foreground/20 rounded-lg text-graphite-foreground placeholder:text-graphite-foreground/50 focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <div>
                <textarea 
                  placeholder="Расскажите о вашем проекте"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-background/10 border border-graphite-foreground/20 rounded-lg text-graphite-foreground placeholder:text-graphite-foreground/50 focus:outline-none focus:border-accent transition-colors resize-none"
                />
              </div>
              <button 
                type="submit"
                className="w-full px-8 py-4 bg-accent text-accent-foreground font-medium rounded-lg hover:bg-accent/90 transition-colors"
              >
                Отправить заявку
              </button>
            </form>
          </div>
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-xl">Спасибо!</DialogTitle>
            <DialogDescription className="text-center text-base">
              Ваша заявка успешно отправлена!
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Contacts;
