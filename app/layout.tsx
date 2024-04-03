import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "微信表格机器人",
  description: "免费使用，支持源码部署",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
