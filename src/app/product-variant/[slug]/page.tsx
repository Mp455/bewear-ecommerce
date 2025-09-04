import Image from "next/image";
import { notFound } from "next/navigation";

import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import ProductList from "@/components/common/product-list";
import {
  getLikelyProductsByCategoryId,
  getProductVariantBySlug,
} from "@/data/products/get-product-variant";
import { formatCentsToBRL } from "@/helpers/money";

import ProductActions from "./components/product-actions";
import VariantSelector from "./components/variant-selector";

interface ProductVariantPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProductVariantPage({
  params,
}: ProductVariantPageProps) {
  const { slug } = await params;
  const productVariant = await getProductVariantBySlug(slug);
  if (!productVariant) {
    return notFound();
  }
  const likelyProducts = await getLikelyProductsByCategoryId(
    productVariant.product.categoryId,
  );
  return (
    <>
      <Header />
      <div className="flex flex-col space-y-6 md:hidden">
        <Image
          src={productVariant.imageUrl}
          alt={productVariant.name}
          sizes="100vw"
          height={0}
          width={0}
          className="h-auto w-full object-cover"
        />

        <div className="px-5">
          <VariantSelector
            selectedVariantSlug={productVariant.slug}
            variants={productVariant.product.variants}
          />
        </div>

        <div className="px-5">
          <h2 className="text-lg font-semibold">
            {productVariant.product.name}
          </h2>
          <h3 className="text-muted-foreground text-sm">
            {productVariant.name}
          </h3>
          <h3 className="text-lg font-semibold">
            {formatCentsToBRL(productVariant.priceInCents)}
          </h3>
        </div>

        <ProductActions productVariantId={productVariant.id} />

        <div className="px-5">
          <p className="text-shadow-amber-600">
            {productVariant.product.description}
          </p>
        </div>

        <ProductList title="Talvez você goste" products={likelyProducts} />

        <Footer />
      </div>

      <div className="hidden space-y-6 md:grid md:grid-cols-4">
        <Image
          src={productVariant.imageUrl}
          alt={productVariant.name}
          sizes="100vw"
          height={0}
          width={0}
          className="col-span-2 h-auto w-full object-cover"
        />

        <div className="col-span-2 flex flex-col justify-between space-y-6 px-5">
          <div>
            <h2 className="text-4xl font-semibold">
              {productVariant.product.name}
            </h2>
            <h3 className="text-muted-foreground text-2xl">
              {productVariant.name}
            </h3>
            <h3 className="text-2xl font-semibold">
              {formatCentsToBRL(productVariant.priceInCents)}
            </h3>
          </div>

          <VariantSelector
            selectedVariantSlug={productVariant.slug}
            variants={productVariant.product.variants}
          />

          <ProductActions productVariantId={productVariant.id} />

          <div className="px-5">
            <p className="text-lg font-semibold text-shadow-amber-600">
              {productVariant.product.description}
            </p>
          </div>
        </div>

        <div className="col-span-4">
          <ProductList title="Talvez você goste" products={likelyProducts} />
        </div>

        <div className="col-span-4">
          <Footer />
        </div>
      </div>
    </>
  );
}
