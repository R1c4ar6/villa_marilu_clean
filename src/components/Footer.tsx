import { useLanguage } from '@/contexts/LanguageContext';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
              Villa Marilú
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t('footer.aboutText')}
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">{t('footer.contact')}</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">
                  {t('contact.address')}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <a href="tel:+50761234567" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t('contact.phone')}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:info@villamarilu.pa" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t('contact.email')}
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">{t('contact.hours.title')}</h4>
            <div className="text-sm text-muted-foreground space-y-2">
              <p>{t('contact.hours')}</p>
              <p className="text-destructive font-semibold">{t('footer.closedMonday')}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-6 mb-4 md:mb-0">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
          </div>
          <div className="text-sm text-muted-foreground text-center md:text-right">
            <p>{t('footer.copyright')}</p>
            <div className="flex justify-center md:justify-end space-x-4 mt-2 text-xs">
              <a href="#" className="hover:text-primary transition-colors">
                {t('footer.privacy')}
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                {t('footer.terms')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
