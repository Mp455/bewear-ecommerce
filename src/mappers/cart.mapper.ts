// cart.mapper.ts
import { InferSelectModel } from "drizzle-orm";

import { cartTable } from "@/db/schema";
import { CartDTO } from "@/dtos/cart.dto";

import { mapCartItemToDTO } from "./cart-item.mapper";
import { mapShippingAddressToDTO } from "./shipping-address.mapper";

type DbCart = InferSelectModel<typeof cartTable> & {
  shippingAddress: Parameters<typeof mapShippingAddressToDTO>[0] | null;
  items: Parameters<typeof mapCartItemToDTO>[0][];
};

export function mapCartToDTO(dbCart: DbCart): CartDTO {
  return {
    id: dbCart.id,
    userId: dbCart.userId,
    shippingAddress: dbCart.shippingAddress
      ? mapShippingAddressToDTO(dbCart.shippingAddress)
      : null,
    items: dbCart.items.map(mapCartItemToDTO),
    createdAt: dbCart.createdAt.toISOString(),
  };
}
