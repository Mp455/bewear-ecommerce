import Image from "next/image";

import CategorySelector from "@/components/common/category-selector";
import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import ProductList from "@/components/common/product-list";
import { getCategories } from "@/data/categories/get-categories";
import { getNewlyCreatedProducts } from "@/data/products/get-newly-created-products";
import { getProducts } from "@/data/products/get-product";

export default async function Home() {
  const products = await getProducts();
  const newlyCreatedProducts = await getNewlyCreatedProducts();
  const categories = await getCategories();
  return (
    <>
      <Header />
      <div className="space-y-6">
        <div className="hidden px-5 md:block">
          <CategorySelector categories={categories} />
        </div>

        <div className="px-5">
          <Image
            src="/banner-m-01.png"
            alt="Leve uma vida com estilo"
            height={0}
            width={0}
            sizes="100vw"
            className="h-auto w-full md:hidden"
          />

          <Image
            src="/banner-d-01.png"
            alt="Leve uma vida com estilo"
            height={0}
            width={0}
            sizes="100vw"
            className="hidden h-auto w-full md:block"
          />
        </div>

        <ProductList products={products} title="Mais vendidos" />

        <div className="px-5 md:hidden">
          <CategorySelector categories={categories} />
        </div>

        <div className="px-5">
          <Image
            src="/banner-m-02.png"
            alt="Leve uma vida com estilo"
            height={0}
            width={0}
            sizes="100vw"
            className="h-auto w-full md:hidden"
          />
        </div>

        <div className="md:hidden">
          <ProductList products={newlyCreatedProducts} title="Novos produtos" />
        </div>

        <Footer />
      </div>
    </>
  );
}
