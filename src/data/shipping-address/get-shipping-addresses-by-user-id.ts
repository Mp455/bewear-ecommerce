import { eq } from "drizzle-orm";

import { db } from "@/db";
import { shippingAddressTable } from "@/db/schema";

export async function getShippingAddressesByUserId(userId: string) {
  return db.query.shippingAddressTable.findMany({
    where: eq(shippingAddressTable.userId, userId),
  });
}
