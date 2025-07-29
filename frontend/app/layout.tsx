import { LayoutProps } from "@/types";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Tu Tiên Đọc Truyện - Thế Giới Tiểu Thuyết Tu Tiên",
    template: "%s | Tu Tiên Đọc Truyện",
  },
  description:
    "Khám phá thế giới tu tiên với hàng ngàn tiểu thuyết hấp dẫn. Đọc truyện online miễn phí với giao diện đẹp mắt và trải nghiệm tuyệt vời.",
  keywords: [
    "truyện tu tiên",
    "tiểu thuyết",
    "đọc truyện online",
    "xianxia",
    "cultivation",
  ],
  authors: [{ name: "Tu Tiên Team" }],
  creator: "Tu Tiên Đọc Truyện",
  publisher: "Tu Tiên Đọc Truyện",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || "https://tu-tien-doc-truyen.com"
  ),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    title: "Tu Tiên Đọc Truyện - Thế Giới Tiểu Thuyết Tu Tiên",
    description: "Khám phá thế giới tu tiên với hàng ngàn tiểu thuyết hấp dẫn.",
    siteName: "Tu Tiên Đọc Truyện",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tu Tiên Đọc Truyện",
    description: "Khám phá thế giới tu tiên với hàng ngàn tiểu thuyết hấp dẫn.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#22c55e" },
    { media: "(prefers-color-scheme: dark)", color: "#059669" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="vi" className={inter.variable}>
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}
