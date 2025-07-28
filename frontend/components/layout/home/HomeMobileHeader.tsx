import { CULTIVATION_COLORS } from '@/libs/data';
import { MobileMenuProps } from '@/types';
import clsx from 'clsx';
import { BookOpen, Crown, LogOut, Settings, Star, Sword, UserIcon, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useCallback } from 'react';

export const MobileMenu: React.FC<MobileMenuProps> = ({
    isOpen,
    onClose,
    user,
    isLoading,
    onLogin,
    onLogout,
    menuItems
}) => {
    // Stop propagation handler for dropdown content
    const stopPropagation = useCallback((e: React.MouseEvent) => {
        e.stopPropagation();
    }, []);

    // Handle logout and close menu
    const handleLogout = useCallback(() => {
        onLogout();
        onClose();
    }, [onLogout, onClose]);

    // Handle login and close menu
    const handleLogin = useCallback(() => {
        onLogin();
        onClose();
    }, [onLogin, onClose]);

    if (!isOpen) return null;

    return <div
        className="lg:hidden fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
    >
        <div
            className="absolute right-0 top-0 h-full w-80 max-w-[90vw] bg-white dark:bg-slate-800 shadow-xl transform transition-transform duration-300 ease-out overflow-y-auto"
            onClick={stopPropagation}
            role="dialog"
            aria-modal="true"
            aria-label="Menu điều hướng"
        >
            {/* Mobile menu header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-green-50 to-cyan-50 dark:from-slate-700 dark:to-slate-600">
                <div className="flex items-center space-x-3">
                    <div className="relative">
                        <div className="bg-gradient-to-br from-emerald-500 to-cyan-600 p-2 rounded-full">
                            <Sword className="w-5 h-5 text-white" />
                        </div>
                    </div>
                    <div>
                        <h2 className="text-lg font-serif font-bold text-gray-900 dark:text-gray-100">Tu Tiên Các</h2>
                        <p className="text-xs text-green-600 dark:text-green-400 font-medium">修仙阁 • Menu</p>
                    </div>
                </div>
                <button
                    onClick={onClose}
                    className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                    aria-label="Đóng menu"
                >
                    <X className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                </button>
            </div>

            {/* Mobile Account Section - Moved from header */}
            <div className="p-4 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-slate-700/50">
                {user ? (
                    // Logged in mobile account section
                    <div className="space-y-4">
                        <div className="flex items-center space-x-4">
                            <div className="relative">
                                <Image
                                    src={user.avatar}
                                    alt={user.name}
                                    width={60}
                                    height={60}
                                    className="w-15 h-15 rounded-full border-3 border-green-300 dark:border-green-400"
                                />
                                {user.vipLevel > 0 && (
                                    <Crown className="absolute -top-1 -right-1 w-5 h-5 text-yellow-500" />
                                )}
                            </div>
                            <div className="flex-1">
                                <h3 className="font-semibold text-gray-900 dark:text-gray-100">{user.name}</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">{user.email}</p>
                                <div className="flex items-center justify-between mt-2">
                                    <span className={clsx(
                                        'text-xs px-3 py-1 rounded-full font-medium',
                                        CULTIVATION_COLORS[user.cultivationLevel as keyof typeof CULTIVATION_COLORS]
                                    )}>
                                        {user.cultivationLevel}
                                    </span>
                                    <div className="flex items-center space-x-1 text-yellow-500">
                                        <Star className="w-4 h-4" />
                                        <span className="text-sm font-medium">{user.points}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Account actions */}
                        <div className="grid grid-cols-2 gap-2">
                            <Link
                                href="/user/tu-truyen"
                                className="flex items-center justify-center space-x-2 p-3 bg-white dark:bg-slate-600 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-500 transition-colors duration-200"
                                onClick={onClose}
                            >
                                <BookOpen className="w-4 h-4 text-green-600" />
                                <span className="text-sm font-medium">Tủ Truyện</span>
                            </Link>
                            <Link
                                href="/user/profile"
                                className="flex items-center justify-center space-x-2 p-3 bg-white dark:bg-slate-600 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-500 transition-colors duration-200"
                                onClick={onClose}
                            >
                                <Settings className="w-4 h-4 text-blue-600" />
                                <span className="text-sm font-medium">Cài Đặt</span>
                            </Link>
                        </div>

                        <button
                            onClick={handleLogout}
                            className="w-full flex items-center justify-center space-x-2 p-3 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors duration-200"
                        >
                            <LogOut className="w-4 h-4" />
                            <span className="font-medium">Đăng Xuất</span>
                        </button>
                    </div>
                ) : (
                    // Not logged in mobile account section
                    <div className="text-center space-y-4">
                        <div className="w-16 h-16 mx-auto bg-gradient-to-br from-green-100 to-cyan-100 dark:from-green-900 dark:to-cyan-900 rounded-full flex items-center justify-center">
                            <UserIcon className="w-8 h-8 text-green-600 dark:text-green-400" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Chưa đăng nhập</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Đăng nhập để trải nghiệm đầy đủ tính năng</p>
                            <button
                                onClick={handleLogin}
                                disabled={isLoading}
                                className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg font-medium transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                            >
                                {isLoading ? (
                                    <>
                                        <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                                        <span>Đang tải...</span>
                                    </>
                                ) : (
                                    <span>Đăng Nhập / Đăng Ký</span>
                                )}
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Mobile navigation menu */}
            <nav className="p-4 space-y-2">
                <div className="mb-4">
                    <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                        Điều hướng chính
                    </h3>
                </div>

                {menuItems.map((item, index) => (
                    <div key={index} className="space-y-1">
                        <Link
                            href={item.href}
                            onClick={onClose}
                            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 group"
                        >
                            <div className="text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform duration-200">
                                {item.icon}
                            </div>
                            <span className="font-medium text-gray-900 dark:text-gray-100 flex-1">{item.label}</span>

                            {/* Hot/New badges */}
                            {item.isHot && (
                                <span className="px-2 py-1 text-xs bg-red-500 text-white rounded-full animate-pulse font-medium">
                                    HOT
                                </span>
                            )}
                            {item.isNew && (
                                <span className="px-2 py-1 text-xs bg-green-500 text-white rounded-full font-medium">
                                    NEW
                                </span>
                            )}
                        </Link>

                        {/* Mobile submenu for Thể Loại */}
                        {item.children && (
                            <div className="ml-6 space-y-1 border-l-2 border-gray-200 dark:border-gray-600 pl-4">
                                {item.children.map((child, childIndex) => (
                                    <Link
                                        key={childIndex}
                                        href={`${item.href}/${child.href}`}
                                        onClick={onClose}
                                        className="block p-2 text-sm text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/20 rounded transition-colors duration-200"
                                    >
                                        {child.label}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </nav>

            {/* Mobile menu footer */}
            <div className="mt-auto p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-slate-700/50">
                <div className="text-center">
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                        Tu Tiên Các © 2024
                    </p>
                    <div className="flex justify-center space-x-4 text-xs">
                        <Link href="/ve-chung-toi" className="text-green-600 dark:text-green-400 hover:underline">
                            Về chúng tôi
                        </Link>
                        <Link href="/lien-he" className="text-green-600 dark:text-green-400 hover:underline">
                            Liên hệ
                        </Link>
                        <Link href="/dieu-khoan" className="text-green-600 dark:text-green-400 hover:underline">
                            Điều khoản
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
}