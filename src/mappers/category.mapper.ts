import { InferSelectModel } from "drizzle-orm";

import { categoryTable } from "@/db/schema";
import { CategoryDTO } from "@/dtos/category.dto";

export function mapCategoryToDTO(
  row: InferSelectModel<typeof categoryTable>,
): CategoryDTO {
  return {
    id: row.id,
    name: row.name,
    slug: row.slug,
    createdAt: row.createdAt,
  };
}
