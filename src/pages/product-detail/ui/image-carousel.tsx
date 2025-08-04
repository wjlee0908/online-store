"use client";

import { CarouselPagination } from "@/widgets/carousel/ui/carousel";
import { Carousel, CarouselContent, CarouselItem } from "@widgets/carousel";
import clsx from "clsx";
import Image from "next/image";
import { useProductQuery } from "@entities/product";

export interface ImageCarouselProps {
  className?: string;

  productId: number;
}

export const ImageCarousel = ({ className, productId }: ImageCarouselProps) => {
  const { product } = useProductQuery({ productId });

  return (
    <Carousel className={clsx("w-full flex flex-col gap-4", className)}>
      <CarouselContent>
        {product?.images.map((image, index) => (
          <CarouselItem key={index} className="pl-0">
            <Image
              src={image}
              alt={`${product.title} image ${index}`}
              width={960}
              height={960}
              className="w-full h-full object-cover"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPagination />
    </Carousel>
  );
};
