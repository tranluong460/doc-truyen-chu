import { HomeFooter, HomeHeader } from '@/components/layout';
import { AuthProvider } from '@/libs/providers';
import { LayoutProps } from '@/types';
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Tu Tiên Các - Đọc Truyện Tu Tiên Hàng Đầu",
    description: "Website đọc truyện tu tiên, huyền huyễn, kiếm hiệp hàng đầu Việt Nam. Cập nhật mới nhất, giao diện đẹp, trải nghiệm đọc tuyệt vời.",
    keywords: "truyện tu tiên, huyền huyễn, kiếm hiệp, đọc truyện online, tu luyện",
    openGraph: {
        title: "Tu Tiên Các - Đọc Truyện Tu Tiên Hàng Đầu",
        description: "Website đọc truyện tu tiên, huyền huyễn, kiếm hiệp hàng đầu Việt Nam",
        type: "website",
        locale: "vi_VN",
    },
};

export default function HomeLayout({ children }: LayoutProps) {
    return (
        <AuthProvider>
            <HomeHeader />
            <main>
                {children}
            </main>
            <HomeFooter />
        </AuthProvider>
    );
}