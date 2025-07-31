import HeartIcon from "@heroicons/react/24/outline/HeartIcon";
import ShareIcon from "@heroicons/react/24/outline/ShareIcon";

export const TitleButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="w-8 h-8 flex justify-center items-center cursor-pointer">
      {children}
    </button>
  );
};

export const TitleSection = () => {
  return (
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
  );
};
