import type { Metadata } from "next";
import "./globals.css";
import { pretendard } from "@/styles/fonts";

export const metadata: Metadata = {
  title: "Minimalism",
  description: "Minimal is a minimalistic online store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${pretendard.className} antialiased`}>{children}</body>
    </html>
  );
}
