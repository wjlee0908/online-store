"use client";

import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import router from "next/router";
import { useEffect, useRef, useState } from "react";

export interface HeaderViewProps {
  title?: string;
}

export function HeaderView({ title }: HeaderViewProps) {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrollingDown = currentScrollY > lastScrollY.current;

      // 스크롤 방향에 따라 헤더 표시/숨김
      if (isScrollingDown && currentScrollY > 50) {
        setIsVisible(false); // 아래로 스크롤 시 숨김
      } else if (!isScrollingDown) {
        setIsVisible(true); // 위로 스크롤 시 보임
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY.current]);

  return (
    <header
      className={clsx(
        "flex items-center justify-between w-full h-12 bg-white border-gray-200 border-b-[1px] sticky top-0 z-header transition-transform duration-300 ease-linear",
        !isVisible && "translate-y-[-100%]"
      )}
    >
      <button
        onClick={() => router.back()}
        className="px-4 py-4 cursor-pointer"
      >
        <ChevronLeftIcon className="text-black w-5 h-5" />
      </button>
      {title ? (
        <h1 className="text-base font-medium text-center">{title}</h1>
      ) : null}
      <button className="px-4 py-4 cursor-pointer">
        <ShoppingCartIcon className="text-black w-5 h-5 " />
      </button>
    </header>
  );
}
