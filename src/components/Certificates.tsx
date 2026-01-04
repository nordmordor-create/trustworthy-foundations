import { useState } from "react";
import { X } from "lucide-react";
import certificate1 from "@/assets/certificate-1.jpg";
import license1 from "@/assets/license-1.jpg";
import thanks1 from "@/assets/thanks-1.jpg";
import thanks2 from "@/assets/thanks-2.jpg";

const Certificates = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const documents = [
    {
      image: certificate1,
      title: "Сертификат ISO 9001:2015",
      type: "Сертификат"
    },
    {
      image: license1,
      title: "Лицензия СРО",
      type: "Лицензия"
    },
    {
      image: thanks1,
      title: "Благодарность от семьи Ивановых",
      type: "Благодарность"
    },
    {
      image: thanks2,
      title: "Благодарственное письмо",
      type: "Благодарность"
    }
  ];

  return (
    <section className="section-spacing bg-secondary/30">
      <div className="container-main">
        <div className="text-center mb-12">
          <div className="accent-line mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Сертификаты и благодарности
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Документы, подтверждающие качество нашей работы и доверие клиентов
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {documents.map((doc, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-xl overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300 group"
              onClick={() => setSelectedImage(doc.image)}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src={doc.image} 
                  alt={doc.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-3">
                <div className="text-xs text-accent font-medium mb-1">{doc.type}</div>
                <div className="text-sm text-foreground font-medium line-clamp-2">{doc.title}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-background/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:bg-secondary transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-5 h-5" />
            </button>
            <img 
              src={selectedImage} 
              alt="Увеличенное изображение"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Certificates;
