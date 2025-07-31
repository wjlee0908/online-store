import Link from "next/link";

export const Navigation = () => {
  return (
    <nav className="flex items-center gap-4">
      <Link href="#detail">상세 정보</Link>
      <Link href="#review">상품 리뷰</Link>
    </nav>
  );
};
