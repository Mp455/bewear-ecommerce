// cart-item.mapper.ts
import { InferSelectModel } from "drizzle-orm";

import { cartItemTable } from "@/db/schema";
import { CartItemDTO } from "@/dtos/cart.dto";

import { mapProductVariantToDTO } from "./product-variant.mapper";

type DbCartItem = InferSelectModel<typeof cartItemTable> & {
  productVariant: Parameters<typeof mapProductVariantToDTO>[0];
};

export function mapCartItemToDTO(dbCartItem: DbCartItem): CartItemDTO {
  return {
    id: dbCartItem.id,
    quantity: dbCartItem.quantity,
    productVariant: mapProductVariantToDTO(dbCartItem.productVariant),
  };
}
