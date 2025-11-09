import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin, Phone, Mail, Clock, X } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const { t } = useLanguage();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative max-w-2xl w-full max-h-[90vh] overflow-y-auto bg-background rounded-lg shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 bg-background border-b p-6 rounded-t-lg">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
                {t('contact.title')}
              </h2>
              <p className="text-lg text-muted-foreground font-serif italic mt-2">
                {t('contact.subtitle')}
              </p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="h-8 w-8 rounded-full"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="space-y-4">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">{t('contact.address')}</h3>
                    <div className="mt-4">
                      <a 
                        href="https://maps.google.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:underline inline-flex items-center"
                      >
                        {t('contact.map')}
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">{t('contact.hours.title')}</h3>
                    <div className="space-y-2 text-muted-foreground">
                      <p className="flex justify-between">
                        {t('contact.hours')}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">{t('contact.phone')}</h3>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">{t('contact.email')}</h3>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-background border-t p-4 rounded-b-lg">
          <div className="flex justify-end">
            <Button onClick={onClose} variant="outline">
              {t('contact.closeModal')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}