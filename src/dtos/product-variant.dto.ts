import { ProductDTO } from "./product.dto";

export interface ProductVariantDTO {
  id: string;
  slug: string;
  name: string;
  color: string;
  priceInCents: number;
  imageUrl: string;
  product: ProductDTO;
}
