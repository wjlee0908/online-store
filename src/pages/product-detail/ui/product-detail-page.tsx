import HeartIcon from "@heroicons/react/24/outline/HeartIcon";
import { ImageCarousel } from "./image-carousel";
import ShareIcon from "@heroicons/react/24/outline/ShareIcon";
import { TitleButton } from "./title-button";

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

      <div className="flex flex-col gap-4 px-4">
        <div className="flex items-center">
          <h1 className="font-bold flex-7">
            폭신한 파일 페이스 타월 블루체크 34X85cm
          </h1>
          <div className="flex flex-3 text-gray-400 gap-2 justify-end">
            <TitleButton>
              <HeartIcon className="w-6 h-6" />
            </TitleButton>
            <TitleButton>
              <ShareIcon className="w-6 h-6" />
            </TitleButton>
          </div>
        </div>
        <div className="text-xl font-semibold">4,900원</div>
      </div>
    </div>
  );
};
