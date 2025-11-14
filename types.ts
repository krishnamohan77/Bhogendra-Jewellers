export type WomenProductCategory = 'Rings' | 'Bangles' | 'Necklaces' | 'Earrings' | 'Nosepins' | 'Mangalsutra' | 'Maang Tikka';
export type MenProductCategory = 'Chains' | 'Rings' | 'Bracelets';

export type ProductCategory = WomenProductCategory | MenProductCategory;

export interface Product {
  id: number;
  name: string;
  category: ProductCategory;
  imageUrl: string;
  gender: 'Men' | 'Women';
}
