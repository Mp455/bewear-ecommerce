import { OrderDTO, OrderStatus } from "@/dtos/order.dto";

export interface OrderFromDB {
  id: string;
  totalPriceInCents: number;
  status: string;
  createdAt: Date;
  items: Array<{
    id: string;
    quantity: number;
    productVariant: {
      imageUrl: string;
      priceInCents: number;
      name: string;
      product: {
        name: string;
      };
    };
  }>;
}

export function mapOrderToDTO(order: OrderFromDB): OrderDTO {
  return {
    id: order.id,
    totalPriceInCents: order.totalPriceInCents,
    status: order.status as OrderStatus,
    createdAt: order.createdAt,
    items: order.items.map((item) => ({
      id: item.id,
      imageUrl: item.productVariant.imageUrl,
      productName: item.productVariant.product.name,
      productVariantName: item.productVariant.name,
      priceInCents: item.productVariant.priceInCents,
      quantity: item.quantity,
    })),
  };
}
