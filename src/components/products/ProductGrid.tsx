import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import type { Product } from '../../data';
import InquireButton from './InquireButton';

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  const { i18n } = useTranslation();
  const lang = i18n.language as 'en' | 'ar';

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
      {products.map((product, idx) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.4, delay: (idx % 4) * 0.1 }}
          className="bg-brand-white border border-brand-border rounded-sm overflow-hidden hover:shadow-md transition-shadow group flex flex-col"
        >
          <div className="aspect-[4/3] bg-brand-bone relative overflow-hidden border-b border-brand-border">
            {product.imageUrl ? (
              <img 
                src={product.imageUrl} 
                alt={`${product.name.en} | ${product.name.ar}`} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-brand-taupe">
                No image
              </div>
            )}
            <div className="absolute top-2 start-2 bg-brand-oliveDark/90 text-white text-xs font-bold px-2 py-1 rounded backdrop-blur-sm">
              100% Halal
            </div>
          </div>
          <div className="p-4 flex-grow flex flex-col">
            <h3 className="text-lg font-bold text-brand-charcoal mb-2 flex-grow">
              {product.name[lang]}
            </h3>
            <InquireButton productName={product.name[lang]} />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
