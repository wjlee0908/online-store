import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";

export function FilterButton() {
  return (
    <button className="px-4 h-8 flex items-center text-sm leading-none text-neutral-800 font-semibold gap-1 cursor-pointer bg-gray-200 rounded-sm ">
      <span className="leading-none mt-[1px]">필터</span>
      <AdjustmentsHorizontalIcon className="w-5 h-5" />
    </button>
  );
}
