import { ProductVariantDTO } from "./product-variant.dto";
import { ShippingAddressDTO } from "./shipping-address.dto";

export interface CartItemDTO {
  id: string;
  quantity: number;
  productVariant: ProductVariantDTO;
}

export interface CartDTO {
  id: string;
  userId: string;
  shippingAddress: ShippingAddressDTO | null;
  items: CartItemDTO[];
  createdAt: string;
}
