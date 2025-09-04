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
    <div className="flex items-center gap-4 md:flex-col md:items-start">
      {variants.map((variant) => (
        <Link
          href={`/product-variant/${variant.slug}`}
          key={variant.id}
          className={cn(
            selectedVariantSlug === variant.slug
              ? "border-primary rounded-xl border-2"
              : "",
          )}
        >
          <Image
            width={68}
            height={68}
            src={variant.imageUrl}
            alt={variant.name}
            className="rounded-xl"
          />
        </Link>
      ))}
    </div>
  );
}
