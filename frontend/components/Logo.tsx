import { Sword } from 'lucide-react';
import Link from 'next/link';

export const Logo = () => {
    return <Link
        href="/"
        className="flex items-center space-x-3 group"
        aria-label="Về trang chủ"
    >
        <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full blur-sm opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
            <div className="relative bg-gradient-to-br from-emerald-500 to-cyan-600 p-2 rounded-full">
                <Sword className="w-6 h-6 text-white transform group-hover:rotate-12 transition-transform duration-300" />
            </div>
        </div>

        <div className="hidden sm:block">
            <h1 className="header-text-primary text-2xl lg:text-3xl font-serif font-bold transition-all duration-300" data-sync-text="primary">
                Tu Tiên Các
            </h1>
            <p className="header-accent text-xs font-medium tracking-wider opacity-70" data-sync-text="accent">
                修仙阁 • Thiên Hạ Đệ Nhất
            </p>
        </div>
    </Link>
}