export { cn } from "cn";

export const getImageForSlug = (slug: string) => {
  const s = slug.toLowerCase();
  if (s.includes('ashwagandha')) return '/images/products/ashwagandha.jpg';
  if (s.includes('triphala')) return '/images/products/triphala.jpg';
  if (s.includes('hair')) return '/images/products/hair-oil.jpg';
  if (s.includes('turmeric')) return '/images/products/turmeric.jpg';
  if (s.includes('brahmi')) return '/images/products/brahmi.jpg';
  if (s.includes('amla')) return '/images/products/amla.jpg';
  return '/images/products/placeholder.jpg';
};
