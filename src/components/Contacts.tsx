import React, { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

type FormState = {
  name: string;
  phone: string;
  message: string;
  website: string; // honeypot
};

const Contacts: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [errorText, setErrorText] = useState<string | null>(null);

  const [formData, setFormData] = useState<FormState>({
    name: "",
    phone: "",
    message: "",
    website: "",
  });

  const resetForm = () => {
    setFormData({ name: "", phone: "", message: "", website: "" });
  };

  const sendToServer = async (payload: FormState) => {
    const res = await fetch("/telegram.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await res.json().catch(() => null);

    if (!res.ok || !data?.ok) {
      const msg =
        typeof data?.error === "string" ? data.error : "Ошибка отправки заявки";
      throw new Error(msg);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorText(null);

    // honeypot anti-spam
    if (formData.website.trim() !== "") {
      resetForm();
      setIsDialogOpen(true);
      return;
    }

    if (isSending) return;

    try {
      setIsSending(true);
      await sendToServer(formData);

      resetForm();
      setIsDialogOpen(true);
    } catch (err: any) {
      setErrorText(err?.message ?? "Не удалось отправить заявку");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contacts"
      className="section-spacing bg-graphite text-graphite-foreground"
    >
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* LEFT */}
          <div>
            <div className="w-16 h-1 bg-accent rounded-full mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Оставить заявку
            </h2>
            <p className="text-lg opacity-80 mb-10 leading-relaxed">
              Частное домостроение с инженерным подходом. Свяжитесь с нами для
              консультации.
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

          {/* RIGHT */}
          <div className="bg-background/5 rounded-2xl p-8 md:p-10">
            <h3 className="text-xl font-semibold mb-6">Оставить заявку</h3>

            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* Honeypot */}
              <input
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={formData.website}
                onChange={(e) =>
                  setFormData({ ...formData, website: e.target.value })
                }
                className="hidden"
              />

              <div>
                <input
                  type="text"
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-background/10 border border-graphite-foreground/20 rounded-lg text-graphite-foreground placeholder:text-graphite-foreground/50 focus:outline-none focus:border-accent transition-colors"
                />
              </div>

              <div>
                <input
                  type="tel"
                  placeholder="Телефон"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-background/10 border border-graphite-foreground/20 rounded-lg text-graphite-foreground placeholder:text-graphite-foreground/50 focus:outline-none focus:border-accent transition-colors"
                />
              </div>

              <div>
                <textarea
                  placeholder="Расскажите о вашем проекте"
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-background/10 border border-graphite-foreground/20 rounded-lg text-graphite-foreground placeholder:text-graphite-foreground/50 focus:outline-none focus:border-accent transition-colors resize-none"
                />
              </div>

              {errorText && (
                <div className="text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3">
                  {errorText}
                </div>
              )}

              <button
                type="submit"
                disabled={isSending}
                className="w-full px-8 py-4 bg-accent text-accent-foreground font-medium rounded-lg hover:bg-accent/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSending ? "Отправка..." : "Отправить заявку"}
              </button>

              <p className="text-xs opacity-60 leading-relaxed">
                Нажимая “Отправить заявку”, вы соглашаетесь на обработку
                персональных данных.
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* SUCCESS */}
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