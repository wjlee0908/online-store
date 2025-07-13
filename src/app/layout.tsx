import type { Metadata } from "next";
import "./globals.css";
import { pretendard } from "@/styles/fonts";
import Providers from "@/app/providers";

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
      <body className={`${pretendard.className} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
