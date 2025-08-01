import { CarouselPagination } from "@/widgets/carousel/ui/carousel";
import { Carousel, CarouselContent, CarouselItem } from "@widgets/carousel";
import clsx from "clsx";
import Image from "next/image";

export interface ImageCarouselProps {
  images: {
    src: string;
    alt: string;
  }[];
  className?: string;
}

export const ImageCarousel = ({ images, className }: ImageCarouselProps) => {
  return (
    <Carousel className={clsx("w-full flex flex-col gap-4", className)}>
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index} className="pl-0">
            <Image
              src={image.src}
              alt={image.alt}
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
