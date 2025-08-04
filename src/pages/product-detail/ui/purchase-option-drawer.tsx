import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@widgets/select";
import { DrawerContent } from "@widgets/drawer";
import { SelectGroup } from "@radix-ui/react-select";
import clsx from "clsx";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Counter } from "./counter";

const ContentWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={clsx("w-full px-4", className)}>{children}</div>;
};

export const PurchaseOptionDrawer = () => {
  return (
    <DrawerContent className="pb-5">
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

      <ContentWrapper>
        <div className="w-full p-4 bg-neutral-100 flex flex-col gap-3">
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
    </DrawerContent>
  );
};
