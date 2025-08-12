import { eq } from "drizzle-orm";

import { db } from "@/db";
import { orderTable } from "@/db/schema";
import { OrderDTO } from "@/dtos/order.dto";
import { mapOrderToDTO } from "@/mappers/order.mapper";

export async function getOrders(userId: string): Promise<OrderDTO[]> {
  const orders = await db.query.orderTable.findMany({
    where: eq(orderTable.userId, userId),
    with: {
      items: {
        with: {
          productVariant: {
            with: {
              product: true,
            },
          },
        },
      },
    },
  });

  return orders.map(mapOrderToDTO);
}
