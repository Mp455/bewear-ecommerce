import { VariantDTO } from "./variant.dto";

export interface ProductDTO {
  categoryId: string;
  id: string;
  name: string;
  slug: string;
  description: string;
  variants: VariantDTO[];
}
