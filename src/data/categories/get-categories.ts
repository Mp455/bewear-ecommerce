import { desc, eq } from "drizzle-orm";

import { db } from "@/db";
import { categoryTable } from "@/db/schema";
import { CategoryDTO } from "@/dtos/category.dto";
import { mapCategoryToDTO } from "@/mappers/category.mapper";

import { getProducts } from "../products/get-product";

export async function getCategories(): Promise<CategoryDTO[]> {
  const categories = await db.query.categoryTable.findMany({
    orderBy: [desc(categoryTable.createdAt)],
  });

  return categories.map(mapCategoryToDTO);
}

export async function getCategoryWithProductsBySlug(slug: string) {
  const category = await db.query.categoryTable.findFirst({
    where: eq(categoryTable.slug, slug),
  });

  if (!category) return null;

  const productsDTO = await getProducts(category.id);

  return {
    ...mapCategoryToDTO(category),
    products: productsDTO,
  };
}
