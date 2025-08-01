import { HeartIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

export const Footer = ({ className }: { className?: string }) => {
  return (
    <div
      className={clsx(
        "w-full bg-white px-3 py-2 flex gap-2",
        "fixed bottom-0 left-0",
        "shadow-[0_0_20px_rgba(0,0,0,0.2)]",
        className
      )}
    >
      <button className="w-13 h-13 flex items-center justify-center border border-solid border-neutral-200 rounded-sm cursor-pointer">
        <HeartIcon className="w-6 h-6 text-neutral-700" />
      </button>
      <button className="flex-1 flex items-center justify-center bg-black font-medium text-white rounded-sm cursor-pointer">
        구매
      </button>
    </div>
  );
};
