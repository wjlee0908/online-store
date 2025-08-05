"use client";

import { CarouselPagination } from "@/widgets/carousel/ui/carousel";
import { Carousel, CarouselContent, CarouselItem } from "@widgets/carousel";
import Image from "next/image";
import { cn } from "@shared/lib";
import { useProduct } from "../model/use-product";

export interface ImageCarouselProps {
  className?: string;
}

export const ImageCarousel = ({ className }: ImageCarouselProps) => {
  const { product } = useProduct();

  return (
    <Carousel className={cn("w-full flex flex-col gap-4", className)}>
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
