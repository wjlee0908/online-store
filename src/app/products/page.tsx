import { ProductCard } from "@/components/product-card";
import { SubcategoryTab } from "@/components/subcategory-tab";

export default function ProductsPage() {
  return (
    <main>
      <SubcategoryTab
        className="mb-4"
        subcategories={["남성", "여성", "아동", "패션잡화"]}
      />
      <div className="grid grid-cols-2 gap-4 px-4">
        {Array.from({ length: 20 }).map((_, index) => (
          <ProductCard
            key={index}
            productId={index + 1}
            imageSrc="https://dummyimage.com/200x200.png"
            name="알루미늄 하드 캐리어 60L"
            price={990_000}
          />
        ))}
      </div>
    </main>
  );
}
