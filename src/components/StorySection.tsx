import { useLanguage } from '@/contexts/LanguageContext';
import interiorImage from "@assets/images/Cozy_restaurant_interior_dining_b1959f29.png";
import exteriorImage from "@assets/images/Restaurant_building_exterior_view_d7c8a734.png";

interface StorySectionProps {
  onOpenContact: () => void;
}

export function StorySection({ onOpenContact }: StorySectionProps) {
  const { t } = useLanguage();

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onOpenContact();
  };

  return (
    <section id="story" className="py-16 md:py-24 lg:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">
            {t('story.title')}
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground font-serif italic">
            {t('story.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-base md:text-lg leading-relaxed text-foreground">
              {t('story.p1')}
            </p>
            <p className="text-base md:text-lg leading-relaxed text-foreground">
              {t('story.p2')}
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src={interiorImage}
              alt="Villa Marilú interior"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-lg overflow-hidden shadow-lg order-2 md:order-1">
            <img
              src={exteriorImage}
              alt="Villa Marilú exterior"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-6 order-1 md:order-2">
            <p className="text-base md:text-lg leading-relaxed text-foreground">
              {t('story.p3')}
            </p>
            <div className="pt-4">
              <button 
                onClick={handleContactClick}
                className="inline-flex items-center text-primary hover:underline font-medium transition-colors"
              >
                {t('contact.title')} →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}