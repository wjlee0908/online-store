"use client";

import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import router from "next/router";

export interface CategoryHeaderProps {
  title: string;
}

export function CategoryHeader({ title }: CategoryHeaderProps) {
  return (
    <header className="flex items-center justify-between w-full h-14 bg-white border-gray-200 border-b-[1px] sticky top-0 z-header">
      <button
        onClick={() => router.back()}
        className="px-4 py-4 cursor-pointer"
      >
        <ChevronLeftIcon className="text-black w-5 h-5" />
      </button>
      <h1 className="text-base font-medium text-center">{title}</h1>
      <button className="px-4 py-4 cursor-pointer">
        <ShoppingCartIcon className="text-black w-5 h-5 " />
      </button>
    </header>
  );
}
