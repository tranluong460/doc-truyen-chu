import { HomeNavigationProps } from '@/types';
import Link from 'next/link';

export const HomeNavigation: React.FC<HomeNavigationProps> = ({ menuItems }) => {
    return <div className="hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center justify-center space-x-8 h-14">
                {menuItems.map((item, index) => (
                    <div key={index} className="relative group">
                        <Link
                            href={item.href}
                            className="header-text-primary header-hover flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 group-hover:scale-105 transform"
                            data-sync-text="primary"
                        >
                            {item.icon}
                            <span>{item.label}</span>

                            {/* Hot/New badges */}
                            {item.isHot && (
                                <span className="px-2 py-0.5 text-xs bg-red-500 text-white rounded-full animate-pulse">
                                    HOT
                                </span>
                            )}
                            {item.isNew && (
                                <span className="px-2 py-0.5 text-xs bg-green-500 text-white rounded-full">
                                    NEW
                                </span>
                            )}
                        </Link>

                        {/* Submenu for Thể Loại (static, not interactive) */}
                        {item.children && (
                            <div
                                className="modal-synchronized absolute top-full left-0 mt-1 w-48 rounded-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 delay-300 z-40"
                                style={{
                                    backgroundColor: 'var(--modal-bg-secondary)',
                                    borderColor: 'var(--modal-border)',
                                    boxShadow: 'var(--shadow-modal)'
                                }}
                            >
                                {item.children.map((child, childIndex) => (
                                    <Link
                                        key={childIndex}
                                        href={`${item.href}/${child.href}`}
                                        className="modal-text-primary modal-hover block px-4 py-2 text-sm transition-colors duration-200"
                                        data-sync-text="primary"
                                    >
                                        {child.label}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </nav>
        </div>
    </div>
}