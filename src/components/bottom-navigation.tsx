"use client";

import { HashtagIcon } from "@heroicons/react/24/outline";
import { Bars3Icon } from "@heroicons/react/24/outline";
import HomeIcon from "@heroicons/react/24/outline/HomeIcon";
import MagnifyingGlassIcon from "@heroicons/react/24/outline/MagnifyingGlassIcon";
import UserIcon from "@heroicons/react/24/outline/UserIcon";
import clsx from "clsx";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export function BottomNavigation() {
  const navItems = [
    {
      href: "/",
      icon: HomeIcon,
      label: "홈",
    },
    {
      href: "/",
      icon: HashtagIcon,
      label: "피드",
    },
    {
      href: "/",
      icon: MagnifyingGlassIcon,
      label: "검색",
    },
    {
      href: "/",
      icon: Bars3Icon,
      label: "메뉴",
    },
    {
      href: "/",
      icon: UserIcon,
      label: "프로필",
    },
  ];

  const lastScrollY = useRef(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrollingDown = currentScrollY > lastScrollY.current;

      // 스크롤 방향에 따라 표시/숨김
      if (isScrollingDown) {
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
    <nav
      aria-label="하단 네비게이션"
      className={clsx(
        "h-12 fixed bottom-0 left-0 right-0 bg-white shadow-[0px_0px_16px_0px_rgba(0,0,0,0.12)] transition-transform duration-300 ease-linear",
        !isVisible && "translate-y-[100%]"
      )}
    >
      <ul className="w-full flex justify-around items-center">
        {navItems.map((item, index) => (
          <li key={index} className="w-full flex-1">
            <Link
              href={item.href}
              className="w-full flex-1 flex flex-col items-center py-1 group"
              aria-label={item.label}
            >
              <div className="w-10 h-10 p-2 group-hover:bg-gray-100 rounded-lg transition-colors flex items-center justify-center">
                <item.icon className="w-6 h-6" />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
