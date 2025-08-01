import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";

export enum NavItem {
  DETAIL,
  REVIEW,
  QUESTION,
  DELIVERY,
}

export const Navigation = () => {
  const [selected, setSelected] = useState<NavItem>(NavItem.DETAIL);

  const navItems = [
    { id: NavItem.DETAIL, href: "#detail", label: "상세 정보" },
    { id: NavItem.REVIEW, href: "#review", label: "상품 리뷰" },
    { id: NavItem.QUESTION, href: "#question", label: "상품 문의" },
    { id: NavItem.DELIVERY, href: "#delivery", label: "배송 안내" },
  ];

  return (
    <nav className="relative flex items-center border-b border-gray-200">
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
  );
};
