"use client";

import { ProductDTO } from "@/dtos/product.dto";

import ProductItem from "./product-item";

interface ProductListProps {
  products: ProductDTO[];
  title: string;
}

export default function ProductList({ title, products }: ProductListProps) {
  return (
    <div className="space-y-6">
      <h3 className="px-5 font-semibold">{title}</h3>
      <div className="flex w-full gap-4 overflow-x-auto px-5 [&::-webkit-scrollbar]:hidden">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
