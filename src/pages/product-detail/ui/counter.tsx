import { cn } from "@/shared/lib";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";

export const CounterButton = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) => {
  return (
    <button
      className="w-8 h-8 bg-neutral-100 flex justify-center items-center cursor-pointer"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export const Counter = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn("flex items-center border border-neutral-200", className)}
    >
      <CounterButton onClick={() => null}>
        <MinusIcon className="w-3 h-3" />
      </CounterButton>

      <input
        type="number"
        className="w-10 h-8 mx-1 bg-white text-center text-sm border-neutral-200 border-x"
        value={1}
      />

      <CounterButton onClick={() => null}>
        <PlusIcon className="w-3 h-3" />
      </CounterButton>
    </div>
  );
};
