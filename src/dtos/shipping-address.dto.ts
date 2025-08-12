export interface ShippingAddressDTO {
  id: string;
  userId: string;
  recipientName: string;
  street: string;
  number: string;
  complement: string | null;
  city: string;
  state: string;
  neighborhood: string;
  zipCode: string;
  country: string;
  phone: string;
  email: string;
  cpfOrCnpj: string;
  createdAt: string;
}
