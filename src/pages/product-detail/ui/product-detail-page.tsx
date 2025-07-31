import { ImageCarousel } from "./image-carousel";
import { TitleSection } from "./title-section";

export const ProductDetailPage = () => {
  return (
    <div>
      <ImageCarousel
        className="mb-10"
        images={Array.from({ length: 5 }).map((_, index) => ({
          src: `https://dummyimage.com/960x960.png`,
          alt: `Image ${index}`,
        }))}
      />

      <TitleSection />
    </div>
  );
};
