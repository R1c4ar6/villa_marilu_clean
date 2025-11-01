import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import heroImage from "@assets/images/Hero_restaurant_exterior_sunset_54f2cf3e.png";

export function HeroSection() {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 drop-shadow-lg">
          {t('hero.title')}
        </h1>
        <p className="text-2xl md:text-3xl lg:text-4xl text-white/95 mb-4 font-serif italic">
          {t('hero.subtitle')}
        </p>
        <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
          {t('hero.description')}
        </p>
        <Button
          size="lg"
          className="text-lg backdrop-blur-md bg-white/20 hover:bg-white/30 border-2 border-white/40 text-white font-semibold"
          onClick={() => scrollToSection('contact')}
        >
          {t('hero.cta')}
        </Button>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button 
          onClick={() => scrollToSection('story')}
          className="text-white/80 hover:text-white transition-colors"
          aria-label="Scroll down"
        >
          <ChevronDown className="w-10 h-10 animate-bounce" />
        </button>
      </div>
    </section>
  );
}
