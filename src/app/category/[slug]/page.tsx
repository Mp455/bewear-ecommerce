import { notFound } from "next/navigation";

import Header from "@/components/common/header";
import ProductItem from "@/components/common/product-item";
import { getCategoryWithProductsBySlug } from "@/data/categories/get-categories";
import { ProductDTO } from "@/dtos/product.dto";

interface CategoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const categoryWithProducts = await getCategoryWithProductsBySlug(slug);

  if (!categoryWithProducts) {
    return notFound();
  }

  return (
    <>
      <Header />

      <div className="space-y-6 px-5">
        <h2 className="text-xl font-semibold">{categoryWithProducts.name}</h2>

        <div className="grid grid-cols-2">
          {categoryWithProducts.products.map((product: ProductDTO) => (
            <ProductItem
              key={product.id}
              product={product}
              textContainerClassName="max-w-full"
            />
          ))}
        </div>
      </div>
    </>
  );
}
