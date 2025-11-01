import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

import cevicheImg from "@assets/images/Fresh_ceviche_seafood_appetizer_b2c95af7.png";
import empanadasImg from "@assets/images/Beef_empanadas_platter_1f589fd0.png";
import sancochoImg from "@assets/images/Panamanian_sancocho_soup_dish_04b2bf76.png";
import corvinaImg from "@assets/images/Grilled_corvina_fish_platter_1c01daf8.png";
import arrozImg from "@assets/images/Arroz_con_pollo_dish_454b2417.png";
import tamalesImg from "@assets/images/Traditional_Panamanian_tamales_c63a1ab2.png";
import ropaImg from "@assets/images/Ropa_vieja_beef_stew_0c63936b.png";
import tresImg from "@assets/images/Tres_leches_cake_dessert_1d56b08c.png";

export function MenuSection() {
  const { t } = useLanguage();

  const menuCategories = [
    {
      category: 'menu.appetizers',
      dishes: [
        { id: 'ceviche', nameKey: 'dish.ceviche.name', descKey: 'dish.ceviche.desc', image: cevicheImg, price: '$12' },
        { id: 'empanadas', nameKey: 'dish.empanadas.name', descKey: 'dish.empanadas.desc', image: empanadasImg, price: '$8' },
      ],
    },
    {
      category: 'menu.mainCourses',
      dishes: [
        { id: 'sancocho', nameKey: 'dish.sancocho.name', descKey: 'dish.sancocho.desc', image: sancochoImg, price: '$16' },
        { id: 'corvina', nameKey: 'dish.corvina.name', descKey: 'dish.corvina.desc', image: corvinaImg, price: '$22' },
        { id: 'arroz', nameKey: 'dish.arroz.name', descKey: 'dish.arroz.desc', image: arrozImg, price: '$14' },
        { id: 'tamales', nameKey: 'dish.tamales.name', descKey: 'dish.tamales.desc', image: tamalesImg, price: '$10' },
        { id: 'ropa', nameKey: 'dish.ropa.name', descKey: 'dish.ropa.desc', image: ropaImg, price: '$18' },
      ],
    },
    {
      category: 'menu.desserts',
      dishes: [
        { id: 'tres', nameKey: 'dish.tres.name', descKey: 'dish.tres.desc', image: tresImg, price: '$7' },
      ],
    },
  ];

  return (
    <section id="menu" className="py-16 md:py-24 lg:py-32 bg-card">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-card-foreground mb-4">
            {t('menu.title')}
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground font-serif italic">
            {t('menu.subtitle')}
          </p>
        </div>

        <div className="space-y-20">
          {menuCategories.map((category, index) => (
            <div key={index} className="space-y-8">
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-card-foreground border-b pb-2">
                {t(category.category)}
              </h3>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {category.dishes.map((dish) => (
                  <Card key={dish.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={dish.image}
                        alt={t(dish.nameKey)}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                        <h4 className="text-xl font-bold text-white">{t(dish.nameKey)}</h4>
                        <p className="text-primary-foreground/90 font-medium">{dish.price}</p>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <p className="text-foreground/80">{t(dish.descKey)}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-foreground/80 mb-6">
            {t('menu.footer')}
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors"
          >
            {t('contact.form.submit')}
          </a>
        </div>
      </div>
    </section>
  );
}
