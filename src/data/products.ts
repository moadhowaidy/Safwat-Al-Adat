export type ProductCategory = 'canned' | 'meat' | 'poultry' | 'seafood';

export interface Product {
  id: string;
  category: ProductCategory;
  name: { en: string; ar: string };
  description?: { en: string; ar: string };
  imageUrl?: string;
}

export const PRODUCTS: Product[] = [
  // Canned Goods
  {
    id: 'canned-tuna',
    category: 'canned',
    name: { en: 'Canned tuna', ar: 'تونة معلّبة' },
    imageUrl: 'https://placehold.co/600x400/FAF7F0/C9A227?text=Canned+Tuna'
  },
  {
    id: 'canned-sardines',
    category: 'canned',
    name: { en: 'Canned sardines', ar: 'سردين معلّب' },
    imageUrl: 'https://placehold.co/600x400/FAF7F0/C9A227?text=Canned+Sardines'
  },

  // Frozen Meat
  {
    id: 'frozen-beef',
    category: 'meat',
    name: { en: 'Frozen beef', ar: 'لحم بقر مجمّد' },
    imageUrl: 'https://placehold.co/600x400/FAF7F0/C9A227?text=Frozen+Beef'
  },
  {
    id: 'frozen-lamb',
    category: 'meat',
    name: { en: 'Frozen lamb / mutton', ar: 'لحم ضأن مجمّد' },
    imageUrl: 'https://placehold.co/600x400/FAF7F0/C9A227?text=Frozen+Lamb'
  },

  // Frozen Poultry
  {
    id: 'frozen-chicken-whole',
    category: 'poultry',
    name: { en: 'Whole frozen chicken', ar: 'دجاج كامل مجمّد' },
    imageUrl: 'https://placehold.co/600x400/FAF7F0/C9A227?text=Whole+Chicken'
  },
  {
    id: 'frozen-chicken-breast',
    category: 'poultry',
    name: { en: 'Chicken breasts', ar: 'صدور دجاج' },
    imageUrl: 'https://placehold.co/600x400/FAF7F0/C9A227?text=Chicken+Breasts'
  },
  {
    id: 'frozen-chicken-leg',
    category: 'poultry',
    name: { en: 'Chicken legs / thighs', ar: 'أفخاذ دجاج' },
    imageUrl: 'https://placehold.co/600x400/FAF7F0/C9A227?text=Chicken+Legs'
  },
  {
    id: 'frozen-chicken-wing',
    category: 'poultry',
    name: { en: 'Chicken wings', ar: 'أجنحة دجاج' },
    imageUrl: 'https://placehold.co/600x400/FAF7F0/C9A227?text=Chicken+Wings'
  },

  // Frozen Seafood
  {
    id: 'frozen-seafood-fish',
    category: 'seafood',
    name: { en: 'Frozen fish — all varieties', ar: 'أسماك مجمّدة بجميع أنواعها' },
    imageUrl: 'https://placehold.co/600x400/FAF7F0/C9A227?text=Frozen+Fish'
  }
];

export const CATEGORIES = [
  { id: 'canned', name: { en: 'Canned Goods', ar: 'المعلبات' }, description: { en: 'Shelf-stable canned goods, including premium canned tuna, sardines, and a growing range of pantry essentials.', ar: 'المعلبات الغذائية، وتشمل التونة والسردين المعلّب وتشكيلة واسعة من المنتجات طويلة الصلاحية.' } },
  { id: 'meat', name: { en: 'Frozen Meat', ar: 'اللحوم المجمّدة' }, description: { en: 'Frozen meat, sourced from trusted producers and handled under strict cold-chain standards.', ar: 'اللحوم المجمّدة، التي نستوردها من منتجين موثوقين ونتعامل معها وفق أعلى معايير سلسلة التبريد.' } },
  { id: 'poultry', name: { en: 'Frozen Poultry', ar: 'الدواجن المجمّدة' }, description: { en: 'Frozen poultry, sourced from trusted producers and handled under strict cold-chain standards.', ar: 'الدواجن المجمّدة، التي نستوردها من منتجين موثوقين ونتعامل معها وفق أعلى معايير سلسلة التبريد.' } },
  { id: 'seafood', name: { en: 'Frozen Seafood', ar: 'الأسماك المجمّدة' }, description: { en: 'Frozen seafood, covering a wide variety of fish to meet the demands of restaurants, retailers, and distributors.', ar: 'الأسماك المجمّدة بمختلف أنواعها، لتلبية احتياجات المطاعم والفنادق وكبار الموزعين في المنطقة.' } },
] as const;
