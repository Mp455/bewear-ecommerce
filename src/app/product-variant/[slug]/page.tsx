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

      <div className="flex flex-col space-y-6 lg:hidden">
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
          <h3 className="mt-2 text-lg font-semibold">
            {formatCentsToBRL(productVariant.priceInCents)}
          </h3>
        </div>

        <ProductActions productVariantId={productVariant.id} />

        <div className="px-5">
          <p className="text-sm">{productVariant.product.description}</p>
        </div>

        <ProductList products={likelyProducts} title="Talvez você goste" />

        <Footer />
      </div>

      <div className="hidden lg:block">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="space-y-4">
              <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
                <Image
                  src={productVariant.imageUrl}
                  alt={productVariant.name}
                  sizes="50vw"
                  height={600}
                  width={600}
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  {productVariant.product.name}
                </h1>
                <h2 className="text-muted-foreground mt-1 text-lg">
                  {productVariant.name}
                </h2>
                <p className="mt-4 text-3xl font-bold text-gray-900">
                  {formatCentsToBRL(productVariant.priceInCents)}
                </p>
                <div className="mt-4">
                  <VariantSelector
                    selectedVariantSlug={productVariant.slug}
                    variants={productVariant.product.variants}
                  />
                </div>
              </div>

              <ProductActions productVariantId={productVariant.id} />

              <h3 className="text-md leading-relaxed font-semibold">
                {productVariant.product.description}
              </h3>
            </div>
          </div>

          <div className="mt-16">
            <ProductList products={likelyProducts} title="Talvez você goste" />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
