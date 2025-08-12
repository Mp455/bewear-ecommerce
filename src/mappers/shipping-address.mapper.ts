import { InferSelectModel } from "drizzle-orm";

import { shippingAddressTable } from "@/db/schema";
import { ShippingAddressDTO } from "@/dtos/shipping-address.dto";

type DbShippingAddress = InferSelectModel<typeof shippingAddressTable>;

export function mapShippingAddressToDTO(
  dbShippingAddress: DbShippingAddress,
): ShippingAddressDTO {
  return {
    id: dbShippingAddress.id,
    userId: dbShippingAddress.userId,
    recipientName: dbShippingAddress.recipientName,
    street: dbShippingAddress.street,
    number: dbShippingAddress.number,
    complement: dbShippingAddress.complement ?? null,
    city: dbShippingAddress.city,
    state: dbShippingAddress.state,
    neighborhood: dbShippingAddress.neighborhood,
    zipCode: dbShippingAddress.zipCode,
    country: dbShippingAddress.country,
    phone: dbShippingAddress.phone,
    email: dbShippingAddress.email,
    cpfOrCnpj: dbShippingAddress.cpfOrCnpj,
    createdAt: dbShippingAddress.createdAt.toDateString(),
  };
}
