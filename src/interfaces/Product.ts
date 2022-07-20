export default interface Product {
  variant_id: string;
  allowed_packs: Number[];
  categories?: string[];
  compare_at_price: string;
  description: string;
  discount_percentage: number;
  handle: string;
  image_url: string;
  list_price_id: string;
  name: string;
  price_per_litre: string;
  price_per_unit: string;
  product_id: string;
  size: number;
  sku: string;
  total_price: string;
  units_per_pack: number;
}
