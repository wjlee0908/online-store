import Image from "next/image";

export function ProductCard() {
  return (
    <div className="flex flex-col gap-2">
      <Image
        className="aspect-square object-cover"
        src="https://dummyimage.com/200x200.png"
        alt="product-card-image"
        width={200}
        height={200}
      />
      <div>
        <h3 className="text-sm font-normal mb-5">알루미늄 하드 캐리어 60L</h3>
        <p className="text-sm font-semibold">990,000원</p>
      </div>
    </div>
  );
}
