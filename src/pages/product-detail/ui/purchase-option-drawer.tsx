import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@widgets/select";
import { DrawerContent } from "@widgets/drawer";
import { SelectGroup } from "@radix-ui/react-select";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Counter } from "./counter";
import { cn } from "@shared/lib";
import { Button } from "@widgets/button";
import { useState } from "react";

const ContentWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn("w-full px-4", className)}>{children}</div>;
};

const PriceDetail = ({ className }: { className?: string }) => {
  const [openPriceDetail, setOpenPriceDetail] = useState(false);

  return (
    <ContentWrapper className={className}>
      <div className="flex justify-between items-center pb-3 border-b border-neutral-200">
        <p className="text-sm font-semibold">총 합계 금액</p>
        <div className="flex items-center gap-2">
          <p className="text-xl font-semibold">4,900원</p>
          <button
            className="w-6 h-6 flex items-center justify-center cursor-pointer"
            onClick={() => setOpenPriceDetail(!openPriceDetail)}
          >
            {openPriceDetail ? (
              <ChevronUpIcon className="w-4 h-4" />
            ) : (
              <ChevronDownIcon className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>
      {openPriceDetail && (
        <div className="flex flex-col gap-4 text-neutral-500 mt-3">
          <div className="flex justify-between items-center">
            <p className="text-sm font-semibold">총 할인 금액</p>
            <p className="text-sm font-medium">0원</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-sm font-semibold">최대 혜택가</p>
            <p className="text-sm font-medium">4,900원</p>
          </div>
        </div>
      )}
    </ContentWrapper>
  );
};

export const PurchaseOptionDrawer = () => {
  return (
    <DrawerContent className="pb-2">
      <h2 className="text-lg font-semibold px-4 my-5">옵션 선택</h2>

      <ContentWrapper className="mb-6">
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="선택" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="나일론 바디 타월">나일론 바디 타월</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </ContentWrapper>

      <ContentWrapper className="mb-5">
        <div className="w-full p-4 bg-neutral-100 flex flex-col gap-3 rounded-sm">
          <div className="flex justify-between items-start">
            <p className="text-xs font-semibold">나일론 바디 타월</p>
            <button>
              <XMarkIcon className="w-4 h-4" />
            </button>
          </div>

          <div className="flex justify-between items-end">
            <p className="text-sm font-semibold">4,900원</p>
            <Counter />
          </div>
        </div>
      </ContentWrapper>

      <PriceDetail className="mb-3" />

      <ContentWrapper className="flex gap-2 py-3">
        <Button variant="outline" size="xl" className="flex-1">
          장바구니
        </Button>
        <Button size="xl" className="flex-1">
          바로 구매
        </Button>
      </ContentWrapper>
    </DrawerContent>
  );
};
