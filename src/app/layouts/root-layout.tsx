import type { Metadata } from "next";
import "@app/styles/globals.css";
import { pretendard } from "@app/styles/fonts";
import { Providers } from "@app/config";

export const metadata: Metadata = {
  title: "Minimalism",
  description: "Minimal is a minimalistic online store",
};

export const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="ko">
      <body className={`${pretendard.className} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};
