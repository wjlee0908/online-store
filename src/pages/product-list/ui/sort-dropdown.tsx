import { Drawer, DrawerContent, DrawerTrigger } from "@widgets/drawer";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export function SortDropdown() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <button className="h-9 border-b border-gray-300 flex items-center gap-4 cursor-pointer">
          <span className="text-xs text-gray-950 font-normal pl-3">
            신상품순
          </span>
          <ChevronDownIcon className="w-5 h-5 text-gray-300" />
        </button>
      </DrawerTrigger>
      <DrawerContent>
        <p>신상품순</p>
      </DrawerContent>
    </Drawer>
  );
}
