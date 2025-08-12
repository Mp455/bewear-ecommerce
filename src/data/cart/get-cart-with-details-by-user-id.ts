import { eq } from "drizzle-orm";

import { db } from "@/db";
import { cartTable } from "@/db/schema";
import { mapCartToDTO } from "@/mappers/cart.mapper";

export async function getCartWithDetailsByUserId(userId: string) {
  const cart = await db.query.cartTable.findFirst({
    where: eq(cartTable.userId, userId),
    with: {
      shippingAddress: true,
      items: {
        with: {
          productVariant: {
            with: {
              product: {
                with: {
                  variants: true,
                },
              },
            },
          },
        },
      },
    },
  });

  if (!cart) return null;

  return mapCartToDTO(cart);
}
