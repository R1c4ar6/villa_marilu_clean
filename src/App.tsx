import { ThemeProvider } from '@/components/theme-provider';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { StorySection } from '@/components/StorySection';
import { MenuSection } from '@/components/MenuSection';
import { GallerySection } from '@/components/GallerySection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { Toaster } from 'sonner';

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="villa-marilu-theme">
      <LanguageProvider>
        <div className="min-h-screen bg-background text-foreground">
          <Navigation />
          <main>
            <HeroSection />
            <StorySection />
            <MenuSection />
            <GallerySection />
            <ContactSection />
          </main>
          <Footer />
          <Toaster position="top-center" richColors />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
