"use client";

import ShareIcon from "@heroicons/react/24/outline/ShareIcon";
import { ContentWrapper } from "./content-wrapper";
import { cn } from "@shared/lib/class-name";
import { useProduct } from "../model/use-product";

export const TitleButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="w-8 h-8 flex justify-center items-center cursor-pointer">
      {children}
    </button>
  );
};

export const TitleSection = ({ className }: { className?: string }) => {
  const { product } = useProduct();

  return (
    <ContentWrapper className={cn("flex flex-col gap-4", className)}>
      <div className="flex items-center">
        <h1 className="font-bold flex-7">{product.title}</h1>
        <div className="flex flex-3 text-gray-400 gap-2 justify-end">
          <TitleButton>
            <ShareIcon className="w-6 h-6" />
          </TitleButton>
        </div>
      </div>
      <div className="text-xl font-semibold">
        {product.price.toLocaleString()}원
      </div>
    </ContentWrapper>
  );
};
