import Link from "next/link";

import { CategoryDTO } from "@/dtos/category.dto";

import { Button } from "../ui/button";

interface CategorySelectorProps {
  categories: CategoryDTO[];
}

export default function CategorySelector({
  categories,
}: CategorySelectorProps) {
  return (
    <div className="rounded-3xl bg-[#F4EFFF] p-6 md:space-y-6 md:p-0 xl:bg-transparent">
      <h3 className="font-semibold">Categorias</h3>
      <div className="grid grid-cols-2 gap-3 xl:grid-cols-6">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant="ghost"
            className="border-primary xl:bg-primary/88 xl:hover:bg-primary/85 cursor-pointer rounded-full bg-white text-xs font-semibold xl:rounded-xl xl:text-white xl:shadow xl:shadow-purple-950 xl:transition-discrete xl:hover:text-white"
          >
            <Link href={`/category/${category.slug}`}>{category.name}</Link>
          </Button>
        ))}
      </div>
    </div>
  );
}
