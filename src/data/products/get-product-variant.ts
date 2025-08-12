// data/get-product-variant.ts
import { eq } from "drizzle-orm";

import { db } from "@/db";
import { productTable, productVariantTable } from "@/db/schema";
import { mapProductToDTO } from "@/mappers/product.mapper";
import { mapProductVariantToDTO } from "@/mappers/product-variant.mapper";

export async function getProductVariantBySlug(slug: string) {
  const productVariant = await db.query.productVariantTable.findFirst({
    where: eq(productVariantTable.slug, slug),
    with: {
      product: {
        with: {
          variants: true,
        },
      },
    },
  });

  if (!productVariant) return null;

  return mapProductVariantToDTO(productVariant);
}

export async function getLikelyProductsByCategoryId(categoryId: string) {
  const products = await db.query.productTable.findMany({
    where: eq(productTable.categoryId, categoryId),
    with: {
      variants: true,
    },
  });

  return products.map((product) => mapProductToDTO(product));
}
