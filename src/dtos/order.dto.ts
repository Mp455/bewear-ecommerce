export enum OrderStatus {
  Paid = "paid",
  Pending = "pending",
  Canceled = "canceled",
}

export interface OrderItemDTO {
  id: string;
  imageUrl: string;
  productName: string;
  productVariantName: string;
  priceInCents: number;
  quantity: number;
}

export interface OrderDTO {
  id: string;
  totalPriceInCents: number;
  status: OrderStatus;
  createdAt: Date;
  items: OrderItemDTO[];
}
