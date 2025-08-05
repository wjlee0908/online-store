"use client";

import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { HEADER_HEIGHT } from "../config";
import { useScrollHeader } from "../lib/use-scroll-header";
import { cn } from "@shared/lib/class-name";

export interface HeaderViewProps {
  title?: string;
}

export function HeaderView({ title }: HeaderViewProps) {
  const router = useRouter();

  return (
    <header
      className={cn(
        `flex items-center justify-between w-full h-[${HEADER_HEIGHT}px] bg-white border-gray-200 border-b-[1px] sticky top-0 z-header transition-transform duration-300 ease-linear`
      )}
    >
      <button
        onClick={() => router.back()}
        className="px-3 py-3 cursor-pointer"
      >
        <ChevronLeftIcon className="text-black w-5 h-5" />
      </button>
      {title ? (
        <h1 className="text-base font-medium text-center">{title}</h1>
      ) : null}
      <button className="px-3 py-3 cursor-pointer">
        <ShoppingCartIcon className="text-black w-5 h-5 " />
      </button>
    </header>
  );
}
