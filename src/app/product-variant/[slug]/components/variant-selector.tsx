import Image from "next/image";
import Link from "next/link";

import { VariantDTO } from "@/dtos/variant.dto";
import { cn } from "@/lib/utils";

interface VariantSelectorProps {
  selectedVariantSlug: string;
  variants: VariantDTO[];
}

export default function VariantSelector({
  selectedVariantSlug,
  variants,
}: VariantSelectorProps) {
  return (
    <>
      <div className="flex items-center gap-4 lg:hidden">
        {variants.map((variant) => (
          <Link href={`/product-variant/${variant.slug}`} key={variant.id}>
            <Image
              src={variant.imageUrl}
              alt={variant.name}
              width={68}
              height={68}
              className={
                selectedVariantSlug === variant.slug
                  ? "border-primary rounded-xl border-2"
                  : ""
              }
            />
          </Link>
        ))}
      </div>

      <div className="hidden flex-wrap items-center gap-3 lg:flex">
        {variants.map((variant) => (
          <Link href={`/product-variant/${variant.slug}`} key={variant.id}>
            <div
              className={cn(
                `overflow-hidden rounded-lg transition-all duration-200 hover:scale-105 ${
                  selectedVariantSlug === variant.slug
                    ? "ring-primary ring-2 ring-offset-2"
                    : "ring-1 ring-gray-200 hover:ring-gray-300"
                }`,
              )}
            >
              <Image
                src={variant.imageUrl}
                alt={variant.name}
                width={80}
                height={80}
                className="h-20 w-20 object-cover object-center"
              />
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
