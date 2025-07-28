import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Trang Chủ",
    description: "Khám phá thế giới tu tiên với những truyện hay nhất. Đọc truyện online miễn phí.",
};

export default function HomePage() {
    return (
        <h1>Home Page</h1>
    );
}