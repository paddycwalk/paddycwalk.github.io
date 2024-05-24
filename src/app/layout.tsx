import type { Metadata } from "next";
import "./globals.css";
import { customFont } from "./fonts";

export const metadata: Metadata = {
  title: "Paddycwalk",
  description: "Homepage of Paddycwalk",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={customFont.className}>{children}</body>
    </html>
  );
}
