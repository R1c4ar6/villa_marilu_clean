import { ThemeProvider } from '@/components/theme-provider';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { StorySection } from '@/components/StorySection';
import { MenuSection } from '@/components/MenuSection';
import { GallerySection } from '@/components/GallerySection';
import { ContactModal } from '@/components/ContactModal';
import { Footer } from '@/components/Footer';
import { Toaster } from 'sonner';
import { useState } from 'react';

function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openContactModal = () => {
    setIsContactModalOpen(true);
  };

  const closeContactModal = () => {
    setIsContactModalOpen(false);
  };

  return (
    <ThemeProvider defaultTheme="light" storageKey="villa-marilu-theme">
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <main>
          <HeroSection onOpenContact={openContactModal} />
          <StorySection onOpenContact={openContactModal} />
          <MenuSection />
          <GallerySection />
        </main>
        <Footer />
        <Toaster position="top-center" richColors />
        <ContactModal
          isOpen={isContactModalOpen}
          onClose={closeContactModal}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
