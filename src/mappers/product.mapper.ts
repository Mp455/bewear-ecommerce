import { InferSelectModel } from "drizzle-orm";

import { productTable, productVariantTable } from "@/db/schema";
import { ProductDTO } from "@/dtos/product.dto";
import { VariantDTO } from "@/dtos/variant.dto";

type DbProduct = InferSelectModel<typeof productTable> & {
  variants: InferSelectModel<typeof productVariantTable>[];
};

export function mapProductToDTO(dbProduct: DbProduct): ProductDTO {
  return {
    id: dbProduct.id,
    categoryId: dbProduct.categoryId,
    name: dbProduct.name,
    slug: dbProduct.slug,
    description: dbProduct.description,
    variants: dbProduct.variants.map<VariantDTO>((variant) => ({
      id: variant.id,
      name: variant.name,
      slug: variant.slug,
      priceInCents: variant.priceInCents,
      imageUrl: variant.imageUrl,
    })),
  };
}
