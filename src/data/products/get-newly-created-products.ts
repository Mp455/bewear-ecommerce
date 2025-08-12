import { desc } from "drizzle-orm";

import { db } from "@/db";
import { productTable } from "@/db/schema";
import { mapProductToDTO } from "@/mappers/product.mapper";

export async function getNewlyCreatedProducts() {
  const newlyCreatedProducts = await db.query.productTable.findMany({
    orderBy: [desc(productTable.createdAt)],
    with: {
      variants: true,
    },
  });

  return newlyCreatedProducts.map(mapProductToDTO);
}
