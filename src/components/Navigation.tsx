import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { key: 'nav.home', id: 'hero' },
    { key: 'nav.story', id: 'story' },
    { key: 'nav.menu', id: 'menu' },
    { key: 'nav.gallery', id: 'gallery' },
    // { key: 'nav.contact', id: 'contact' }, REPLACED BY MODAL
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20 md:h-24">
          <button
            onClick={() => scrollToSection('hero')}
            className="font-serif text-2xl md:text-3xl font-bold text-foreground hover:opacity-80 transition-opacity px-3 py-2 rounded-md -ml-3"
          >
            Villa Marilú
          </button>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.key}
                onClick={() => scrollToSection(link.id)}
                className="text-base font-medium text-foreground/80 hover:text-foreground transition-colors px-3 py-2 rounded-md"
              >
                {t(link.key)}
              </button>
            ))}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
              className="ml-2"
            >
              <Globe className="h-5 w-5" />
              <span className="ml-2 text-sm font-medium">{language.toUpperCase()}</span>
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.key}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left px-3 py-2 text-base font-medium text-foreground/80 hover:text-foreground hover:bg-accent/50 rounded-md transition-colors"
              >
                {t(link.key)}
              </button>
            ))}
            <div className="pt-2 border-t border-border mt-2">
              <Button
                variant="outline"
                className="w-full justify-start"
                onClick={() => {
                  setLanguage(language === 'en' ? 'es' : 'en');
                  setIsMobileMenuOpen(false);
                }}
              >
                <Globe className="h-4 w-4 mr-2" />
                {language === 'en' ? 'Español' : 'English'}
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
