import { XMarkIcon } from "@heroicons/react/24/outline";
import { Counter } from "./counter";
import { cn } from "@shared/lib";

export const SelectedProductCard = ({
  title,
  price,
  count,

  onChangeCount,
  onClickDelete,
  className,
}: {
  title: string;
  price: number;
  count: number;

  onChangeCount: (count: number) => void;
  onClickDelete: () => void;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "w-full p-4 bg-neutral-100 flex flex-col gap-3 rounded-sm",
        className
      )}
    >
      <div className="flex justify-between items-start">
        <p className="text-xs font-semibold">{title}</p>
        <button onClick={onClickDelete}>
          <XMarkIcon className="w-4 h-4" />
        </button>
      </div>

      <div className="flex justify-between items-end">
        <p className="text-sm font-semibold">{price.toLocaleString()}원</p>
        <Counter value={count} onChange={onChangeCount} />
      </div>
    </div>
  );
};
