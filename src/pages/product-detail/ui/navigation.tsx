"use client";

import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";
import { ContentWrapper } from "./content-wrapper";
import { HEADER_HEIGHT, useScrollHeader } from "@/widgets/header";
import { useInView } from "react-intersection-observer";

export enum NavItem {
  DETAIL,
  REVIEW,
  QUESTION,
  DELIVERY,
}

export const Navigation = ({ className }: { className?: string }) => {
  const [selected, setSelected] = useState<NavItem>(NavItem.DETAIL);

  const scrollHeader = useScrollHeader();
  const originTop = useInView({
    rootMargin: `${-1 * HEADER_HEIGHT}px 0px 0px`,
  });

  const navItems = [
    { id: NavItem.DETAIL, href: "#detail", label: "상세 정보" },
    { id: NavItem.REVIEW, href: "#review", label: "상품 리뷰" },
    { id: NavItem.QUESTION, href: "#question", label: "상품 문의" },
    { id: NavItem.DELIVERY, href: "#delivery", label: "배송 안내" },
  ];

  return (
    <div className={className}>
      <div ref={originTop.ref} className="h-0" />
      <ContentWrapper
        className={clsx(
          "w-full px-4 bg-white",
          !originTop.inView &&
            "fixed top-0 left-0 transition-transform duration-300 ease-linear",
          !originTop.inView && scrollHeader.isVisible && `translate-y-[52px]`
        )}
      >
        <nav
          className={
            "relative flex items-center bg-white border-b border-gray-200"
          }
        >
          {navItems.map(({ id, href, label }) => (
            <Link
              className={clsx(
                "flex-1 text-xs h-10 flex justify-center items-center",
                selected === id && " font-semibold"
              )}
              key={href}
              href={href}
              onClick={() => setSelected(id)}
            >
              <p>{label}</p>
            </Link>
          ))}
          <div
            data-testid="slider"
            className={`absolute bottom-0 left-0 border-b-2 border-black mb-[-1px] transition-all duration-300`}
            style={{
              width: `${100 / navItems.length}%`,
              transform: `translateX(${selected * 100}%)`,
            }}
          />
        </nav>
      </ContentWrapper>
    </div>
  );
};
