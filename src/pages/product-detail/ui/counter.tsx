import { cn } from "@shared/lib/class-name";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";

export const CounterButton = ({
  className,
  children,
  onClick,
}: {
  className?: string;
  children: React.ReactNode;
  onClick: () => void;
}) => {
  return (
    <button
      className={cn(
        "w-8 h-8 bg-neutral-100 flex justify-center items-center cursor-pointer",
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export const Counter = ({
  value,
  maxValue = 99,
  onChange,
  className,
}: {
  value: number;
  maxValue?: number;
  onChange: (value: number) => void;
  className?: string;
}) => {
  const handleClickDecrease = () => {
    if (value <= 1) {
      return;
    }
    onChange(value - 1);
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value < 1) {
      onChange(1);
      return;
    }

    if (value > maxValue) {
      onChange(maxValue);
      return;
    }

    onChange(value);
  };

  const handleClickIncrease = () => {
    if (value >= maxValue) {
      return;
    }

    onChange(value + 1);
  };

  return (
    <div
      className={cn(
        "flex items-center border border-neutral-200 bg-white",
        className
      )}
    >
      <CounterButton className="border-r" onClick={handleClickDecrease}>
        <MinusIcon className="w-3 h-3" />
      </CounterButton>

      <input
        type="number"
        className="w-10 h-8 mx-[2px] bg-white text-center text-sm"
        name="quantity"
        value={value}
        max={maxValue}
        onChange={handleChangeInput}
      />

      <CounterButton className="border-l" onClick={handleClickIncrease}>
        <PlusIcon className="w-3 h-3" />
      </CounterButton>
    </div>
  );
};
