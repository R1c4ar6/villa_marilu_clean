import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";

type Language = "en" | "es";

type StringMap = {
  [key: string]: string | StringMap;
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, StringMap> = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.story": "Our Story",
    "nav.menu": "Menu",
    "nav.gallery": "Gallery",
    "nav.reservations": "Reservations",
    "nav.contact": "Contact",

    // Hero
    "hero.title": "Villa Marilú",
    "hero.subtitle": "Authentic Panamanian Cuisine",
    "hero.description":
      "Experience the warmth of the countryside with traditional flavors passed down through generations",
    "hero.cta": "Reserve Your Table",

    // Story
    "story.title": "Our Story",
    "story.subtitle": "A Panamanian Tradition",
    "story.p1":
      "Nestled in the heart of Panama's beautiful countryside, Villa Marilú has been serving authentic Panamanian cuisine for over two decades. Our family recipes have been lovingly preserved and shared with guests from around the world.",
    "story.p2":
      "Every dish tells a story of our heritage, prepared with fresh, locally-sourced ingredients and the same dedication that our grandmother Marilú brought to her kitchen. From our traditional sancocho to our signature grilled corvina, each plate celebrates the rich culinary traditions of Panama.",
    "story.p3":
      "We invite you to join our family, enjoy the rustic charm of our countryside setting, and taste the authentic flavors that make Panamanian cuisine so special.",

    // Menu
    "menu.title": "Our Menu",
    "menu.subtitle": "Traditional Panamanian Dishes",
    "menu.appetizers": "Appetizers",
    "menu.mainCourses": "Main Courses",
    "menu.desserts": "Desserts",

    // Dishes
    "dish.ceviche.name": "Ceviche de Corvina",
    "dish.ceviche.desc":
      "Fresh corvina fish marinated in lime juice with onions, cilantro, and peppers, served with crispy plantain chips",
    "dish.empanadas.name": "Empanadas de Carne",
    "dish.empanadas.desc":
      "Golden pastries filled with seasoned beef, served with ají sauce",
    "dish.sancocho.name": "Sancocho Panameño",
    "dish.sancocho.desc":
      "Traditional chicken and yuca soup with culantro, a beloved Panamanian comfort dish",
    "dish.corvina.name": "Corvina a la Plancha",
    "dish.corvina.desc":
      "Grilled corvina fillet with chimichurri sauce, patacones, and tropical mango salsa",
    "dish.arroz.name": "Arroz con Pollo",
    "dish.arroz.desc":
      "Classic Panamanian chicken and rice with vegetables, capers, and olives",
    "dish.tresleches.name": "Tres Leches Cake",
    "dish.tresleches.desc":
      "Moist sponge cake soaked in three kinds of milk, topped with whipped cream and berries",
    "dish.tamales.name": "Tamales Panameños",
    "dish.tamales.desc":
      "Traditional cornmeal tamales filled with seasoned beef or pork, served with ají sauce",
    "dish.ropa.name": "Ropa Vieja",
    "dish.ropa.desc":
      "Slow-cooked beef shank with onions, garlic, and cilantro, served with rice and beans",

    // Gallery
    "gallery.title": "Our Gallery",
    "gallery.subtitle": "A Glimpse of Villa Marilú",

    // Contact
    "contact.title": "Visit Us",
    "contact.subtitle": "We'd Love to Hear From You",
    "contact.address": "Countryside Road 123, Panama",
    "contact.hours.title": "Hours",
    "contact.hours": "Open Tuesday-Sunday, 11:00 AM - 11:00 PM",
    "contact.phone": "+507 123-4567",
    "contact.email": "info@villamarilu.pa",
    "contact.form.name": "Your Name",
    "contact.form.email": "Your Email",
    "contact.form.message": "Your Message",
    "contact.form.submit": "Send Message",
    "contact.success":
      "Thank you for your message! We'll get back to you soon.",
    "contact.closeModal": "Close",
    "contact.map": "View on map →",

    // Footer
    "footer.copyright": "© {year} Villa Marilú. All rights reserved.",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.aboutText": "Experience the warmth of the countryside with traditional flavors passed down through generations. 'La Lula' is in charge of every single plate that your palate will taste.",
    "footer.closedMonday": "We're closed on Mondays.",
    "footer.contact": "Contact",
  },
  es: {
    // Navigation
    "nav.home": "Inicio",
    "nav.story": "Nuestra Historia",
    "nav.menu": "Menú",
    "nav.gallery": "Galería",
    "nav.reservations": "Reservaciones",
    "nav.contact": "Contacto",

    // Hero
    "hero.title": "Villa Marilú",
    "hero.subtitle": "Cocina Panameña Auténtica",
    "hero.description":
      "Experimenta la calidez del campo con sabores tradicionales transmitidos de generación en generación",
    "hero.cta": "Reserva tu Mesa",

    // Story
    "story.title": "Nuestra Historia",
    "story.subtitle": "Una Tradición Panameña",
    "story.p1":
      "Ubicada en el corazón del hermoso campo panameño, Villa Marilú ha estado sirviendo cocina panameña auténtica por más de dos décadas. Nuestras recetas familiares han sido preservadas con cariño y compartidas con invitados de todo el mundo.",
    "story.p2":
      "Cada plato cuenta una historia de nuestra herencia, preparado con ingredientes frescos de origen local y la misma dedicación que nuestra abuela Marilú traía a su cocina. Desde nuestro tradicional sancocho hasta nuestra corvina a la parrilla, cada plato celebra las ricas tradiciones culinarias de Panamá.",
    "story.p3":
      "Te invitamos a unirte a nuestra familia, disfrutar del encanto rústico de nuestro entorno campestre y saborear los auténticos sabores que hacen que la cocina panameña sea tan especial.",

    // Menu
    "menu.title": "Nuestro Menú",
    "menu.subtitle": "Platos Tradicionales Panameños",
    "menu.appetizers": "Entradas",
    "menu.mainCourses": "Platos Fuertes",
    "menu.desserts": "Postres",

    // Dishes
    "dish.ceviche.name": "Ceviche de Corvina",
    "dish.ceviche.desc":
      "Corvina fresca marinada en jugo de limón con cebollas, cilantro y ajíes, servida con patacones crujientes",
    "dish.empanadas.name": "Empanadas de Carne",
    "dish.empanadas.desc":
      "Empanadas doradas rellenas de carne sazonada, servidas con salsa ají",
    "dish.sancocho.name": "Sancocho Panameño",
    "dish.sancocho.desc":
      "Sopa tradicional de pollo y yuca con culantro, un reconfortante plato típico panameño",
    "dish.corvina.name": "Corvina a la Plancha",
    "dish.corvina.desc":
      "Filete de corvina a la parrilla con chimichurri, patacones y salsa de mango tropical",
    "dish.arroz.name": "Arroz con Pollo",
    "dish.arroz.desc":
      "Clásico arroz con pollo panameño con vegetales, alcaparras y aceitunas",
    "dish.tresleches.name": "Tres Leches",
    "dish.tresleches.desc":
      "Bizcocho húmedo empapado en tres leches, cubierto con crema batida y frutos rojos",
    "dish.tamales.name": "Tamales",
    "dish.tamales.desc":
      "Tamales rellenos de carne sazonada (pueden ser de pollo), servidos con salsa ají",
    "dish.ropa.name": "Ropa Vieja",
    "dish.ropa.desc":
      "Carne de ropa vieja panameña con cebolla, ajo, cilantro y aceite de oliva",

    // Gallery
    "gallery.title": "Nuestra Galería",
    "gallery.subtitle": "Una Mirada a Villa Marilú",

    // Contact
    "contact.title": "Visítanos",
    "contact.subtitle": "Nos Encantaría Saber de Ti",
    "contact.address": "Camino al Campo 123, Panamá",
    "contact.hours.title": "Horario",
    "contact.hours": "Abierto de Martes a Domingo, 11:00 AM - 11:00 PM",
    "contact.phone": "+507 123-4567",
    "contact.email": "info@villamarilu.pa",
    "contact.form.name": "Tu Nombre",
    "contact.form.email": "Tu Correo Electrónico",
    "contact.form.message": "Tu Mensaje",
    "contact.form.submit": "Enviar Mensaje",
    "contact.success":
      "¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.",
    "contact.closeModal": "Cerrar",
    "contact.map": "Ver en mapa →",

    // Footer
    "footer.copyright": "© {year} Villa Marilú. Todos los derechos reservados.",
    "footer.privacy": "Política de Privacidad",
    "footer.terms": "Términos de Servicio",
    "footer.aboutText": "Experimenta la calidez de la campiña con sus sabores tradicionales pasados de generación en generación, 'La Lula' está personalmente encargada de cada plato que que llegue a tu mesa.",
    "footer.closedMonday": "Villa Marilú se encuentra cerrada los lunes.",
    "footer.contact": "Contacto",

    // Errors
  },
};

export const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  // Debug log
  // console.log("LanguageProvider initialized with language:", language);

  useEffect(() => {
    // Try to get language preference from localStorage
    const savedLanguage = localStorage.getItem("language") as Language;
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "es")) {
      setLanguage(savedLanguage);
    } else {
      // Fallback to browser language
      const browserLang = navigator.language.split("-")[0];
      setLanguage(browserLang === "es" ? "es" : "en");
    }
  }, []);

  useEffect(() => {
    // Save language preference to localStorage
    localStorage.setItem("language", language);
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    // Debug log
    // console.log(`Translating key: ${key} for language: ${language}`);

    // Get the translations for the current language
    const langTranslations = translations[language];

    // Check if the key exists directly
    if (key in langTranslations) {
      const value = langTranslations[key];
      if (typeof value === "string") {
        return value.replace(/\{year\}/g, new Date().getFullYear().toString());
      }
      return key; // Return key if value is not a string
    }

    // If key not found, try to find it by splitting the key
    const keys = key.split(".");
    let current: string | StringMap = langTranslations;
    for (const k of keys) {
      if (current && typeof current === "object" && k in current) {
        current = current[k];
      } else {
        // console.warn(`Translation key not found: ${key}`);
        return key; // Return the key as fallback
      }
    }

    // If we get here, we found the value
    if (typeof current === "string") {
      return current.replace(/\{year\}/g, new Date().getFullYear().toString());
    }

    return key; // Fallback to key if value is not a string
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
