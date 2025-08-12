import { eq } from "drizzle-orm";

import { db } from "@/db";
import { productTable } from "@/db/schema";
import { mapProductToDTO } from "@/mappers/product.mapper";

export async function getProducts(categoryId?: string) {
  const whereCondition = categoryId
    ? eq(productTable.categoryId, categoryId)
    : undefined;

  const products = await db.query.productTable.findMany({
    where: whereCondition,
    with: {
      variants: true,
    },
  });

  return products.map(mapProductToDTO);
}
