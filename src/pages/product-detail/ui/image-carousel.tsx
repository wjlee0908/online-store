import { CarouselPagination } from "@/widgets/carousel/ui/carousel";
import { Carousel, CarouselContent, CarouselItem } from "@widgets/carousel";
import Image from "next/image";

export const ImageCarousel = () => {
  return (
    <Carousel className="w-full max-w-xs flex flex-col gap-4">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="pl-0">
            <Image
              src={`https://dummyimage.com/960x960.png`}
              alt="Image"
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
