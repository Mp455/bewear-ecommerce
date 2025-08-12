import { InferSelectModel } from "drizzle-orm";

import { productTable, productVariantTable } from "@/db/schema";
import { ProductVariantDTO } from "@/dtos/product-variant.dto";

import { mapProductToDTO } from "./product.mapper";

type DbProductWithVariants = InferSelectModel<typeof productTable> & {
  variants: InferSelectModel<typeof productVariantTable>[];
};

type ProductVariant = InferSelectModel<typeof productVariantTable> & {
  product: DbProductWithVariants;
};

export function mapProductVariantToDTO(
  productVariantTable: ProductVariant,
): ProductVariantDTO {
  return {
    id: productVariantTable.id,
    slug: productVariantTable.slug,
    name: productVariantTable.name,
    color: productVariantTable.color,
    priceInCents: productVariantTable.priceInCents,
    imageUrl: productVariantTable.imageUrl,
    product: mapProductToDTO(productVariantTable.product),
  };
}
