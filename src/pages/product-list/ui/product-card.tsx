import { cn } from "@shared/lib";
import Image from "next/image";
import Link from "next/link";

export interface ProductCardProps {
  imageSrc: string;
  name: string;
  price: number;
  productId: number;
  className?: string;
}

export function ProductCard({
  imageSrc,
  name,
  price,
  productId,
  className,
}: ProductCardProps) {
  return (
    <Link
      href={`/products/${productId}`}
      className={cn("flex flex-col gap-2", className)}
    >
      <div className="relative w-full aspect-square">
        <Image
          className="object-cover"
          src={imageSrc}
          alt={name}
          fill
          sizes="(max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="text-sm font-normal mb-5">{name}</h3>
        <p className="text-sm font-semibold">{price.toLocaleString()}원</p>
      </div>
    </Link>
  );
}
