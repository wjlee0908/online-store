import { cn } from "@shared/lib";
import ChevronUpIcon from "@heroicons/react/24/outline/ChevronUpIcon";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@widgets/collapsible";

export const PriceDetailCollapsible = ({
  totalPrice,
  totalDiscount,
  maxDiscountedPrice,

  className,
}: {
  totalPrice: number;
  totalDiscount: number;
  maxDiscountedPrice: number;

  className?: string;
}) => {
  return (
    <Collapsible className={className}>
      <div className="flex justify-between items-center pb-3 border-b border-neutral-200">
        <p className="text-sm font-semibold">총 합계 금액</p>
        <div className="flex items-center gap-2">
          <p className="text-xl font-semibold">
            {totalPrice.toLocaleString()}원
          </p>
          <CollapsibleTrigger asChild>
            <button
              className={cn(
                "w-6 h-6 flex items-center justify-center cursor-pointer",
                "transition-transform duration-200",
                "data-[state=open]:rotate-180"
              )}
            >
              <ChevronUpIcon className="w-4 h-4" />
            </button>
          </CollapsibleTrigger>
        </div>
      </div>
      <CollapsibleContent>
        <div className="flex flex-col gap-4 text-neutral-500 pt-3">
          <div className="flex justify-between items-center">
            <p className="text-sm font-semibold">총 할인 금액</p>
            <p className="text-sm font-medium">
              {totalDiscount.toLocaleString()}원
            </p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-sm font-semibold">최대 혜택가</p>
            <p className="text-sm font-medium">
              {maxDiscountedPrice.toLocaleString()}원
            </p>
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};
