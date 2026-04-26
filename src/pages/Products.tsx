import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import Section from '../components/ui/Section';
import GoldDivider from '../components/ui/GoldDivider';
import CategoryHeader from '../components/products/CategoryHeader';
import ProductGrid from '../components/products/ProductGrid';
import { CATEGORIES, PRODUCTS } from '../data';

export default function Products() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as 'en' | 'ar';
  const title = lang === 'ar' ? 'صفوة العادات - منتجاتنا' : 'Safwat Al-Adat - Products';

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      
      <Section className="bg-brand-bone min-h-screen">
        <h1 className="text-4xl md:text-5xl font-bold text-brand-charcoal mb-6">
          {t('nav.products')}
        </h1>
        <GoldDivider className="mb-12" />

        {CATEGORIES.map(category => {
          const categoryProducts = PRODUCTS.filter(p => p.category === category.id);
          
          if (categoryProducts.length === 0) return null;

          return (
            <div key={category.id}>
              <CategoryHeader 
                id={category.id}
                name={category.name[lang]}
                description={category.description[lang]}
              />
              <ProductGrid products={categoryProducts} />
            </div>
          );
        })}
      </Section>
    </>
  );
}
