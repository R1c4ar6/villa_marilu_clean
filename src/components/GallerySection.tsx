import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { X } from 'lucide-react';

import heroImg from "@assets/images/Hero_restaurant_exterior_sunset_54f2cf3e.png";
import interiorImg from "@assets/images/Cozy_restaurant_interior_dining_b1959f29.png";
import terraceImg from "@assets/images/Outdoor_terrace_dining_area_361613ce.png";
import buildingImg from "@assets/images/Restaurant_building_exterior_view_d7c8a734.png";
import chefImg from "@assets/images/Chef_preparing_Panamanian_cuisine_b2ba36f5.png";
import marketImg from "@assets/images/Fresh_market_ingredients_display_ea9dd0bb.png";
import guestsImg from "@assets/images/Guests_enjoying_dining_experience_629bb263.png";
import countrysideImg from "@assets/images/Panamanian_countryside_panoramic_view_00a04a1d.png";
import corvinaImg from "@assets/images/Grilled_corvina_fish_platter_1c01daf8.png";
import arrozImg from "@assets/images/Arroz_con_pollo_dish_454b2417.png";
import cevicheImg from "@assets/images/Fresh_ceviche_seafood_appetizer_b2c95af7.png";
import tresImg from "@assets/images/Tres_leches_cake_dessert_1d56b08c.png";

export function GallerySection() {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { src: heroImg, alt: 'Restaurant exterior at sunset' },
    { src: interiorImg, alt: 'Cozy restaurant interior' },
    { src: terraceImg, alt: 'Outdoor terrace dining' },
    { src: buildingImg, alt: 'Restaurant building' },
    { src: corvinaImg, alt: 'Grilled corvina' },
    { src: arrozImg, alt: 'Arroz con pollo' },
    { src: chefImg, alt: 'Chef preparing dishes' },
    { src: marketImg, alt: 'Fresh market ingredients' },
    { src: guestsImg, alt: 'Happy guests dining' },
    { src: countrysideImg, alt: 'Panamanian countryside' },
    { src: cevicheImg, alt: 'Fresh ceviche' },
    { src: tresImg, alt: 'Tres leches dessert' },
  ];

  return (
    <section id="gallery" className="py-16 md:py-24 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-card-foreground mb-4">
            {t('gallery.title')}
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground font-serif italic">
            {t('gallery.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(image.src)}
              className="relative group overflow-hidden rounded-lg aspect-square"
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors z-10" />
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
          >
            <X className="w-8 h-8" />
          </button>
          <div className="max-w-4xl w-full max-h-[90vh]">
            <img
              src={selectedImage}
              alt="Enlarged view"
              className="w-full h-full object-contain max-h-[80vh]"
            />
          </div>
        </div>
      )}
    </section>
  );
}
