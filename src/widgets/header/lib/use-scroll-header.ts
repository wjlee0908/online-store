"use client";

import { useEffect, useRef, useState } from "react";

export const useScrollHeader = (options?: { offset?: number }) => {
  const { offset = 50 } = options || {};

  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrollingDown = currentScrollY > lastScrollY.current;

      // 스크롤 방향에 따라 헤더 표시/숨김
      if (isScrollingDown && currentScrollY > offset) {
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

  return { isVisible };
};
