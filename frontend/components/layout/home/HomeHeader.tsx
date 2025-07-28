'use client';

import { CULTIVATION_COLORS, mainMenuItems, mockUserData, userDropdownItems } from '@/libs/data';
import { useAuth } from '@/libs/providers';
import { clsx } from 'clsx';
import {
    ChevronDown,
    Crown,
    Menu,
    Star,
    User as UserIcon,
    X
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';

import { Logo } from '@/components/Logo';
import { MobileMenu } from './HomeMobileHeader';
import { HomeNavigation } from './HomeNavigation';
import { HomeSearch } from './HomeSearch';

export const HomeHeader = () => {
    // Auth context
    const { user, isLoading, login, logout } = useAuth();

    // State management for mobile and dropdown interactions
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

    // Refs for dropdown click outside detection
    const userDropdownRef = useRef<HTMLDivElement>(null);

    // Close mobile menu on window resize to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) { // lg breakpoint
                setIsMobileMenuOpen(false);
                setIsUserDropdownOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Effect: Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (userDropdownRef.current && !userDropdownRef.current.contains(event.target as Node)) {
                setIsUserDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Handle mobile menu toggle
    const toggleMobileMenu = useCallback(() => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        // Close user dropdown when opening mobile menu
        setIsUserDropdownOpen(false);
    }, [isMobileMenuOpen]);

    // Handle login (demo with mock data)
    const handleLogin = useCallback(async () => {
        await login(mockUserData);
        if (isMobileMenuOpen) {
            setIsMobileMenuOpen(false);
        }
    }, [login, isMobileMenuOpen]);

    // Handle logout
    const handleLogout = useCallback(() => {
        logout();
        setIsMobileMenuOpen(false);
        setIsUserDropdownOpen(false);
    }, [logout]);

    // Handle user dropdown toggle
    const toggleUserDropdown = useCallback(() => {
        setIsUserDropdownOpen(!isUserDropdownOpen);
        // Close mobile menu when opening user dropdown
        setIsMobileMenuOpen(false);
    }, [isUserDropdownOpen]);

    // Close mobile menu handler

    // Close user dropdown handler  
    const closeUserDropdown = useCallback(() => {
        setIsUserDropdownOpen(false);
    }, []);

    return (
        <header className="header-synchronized sticky top-0 z-50 w-full transition-all duration-300 border-b">
            {/* Section 1: Top section - Logo + Search + Account */}
            <div className="border-b" style={{ borderColor: 'var(--header-border)' }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 lg:h-20">

                        {/* Logo Section */}
                        <Logo />

                        {/* Search Bar */}
                        <HomeSearch />

                        {/* User Account Section */}
                        <div className="flex items-center space-x-4">
                            {/* Mobile menu button - Enhanced with click functionality */}
                            <button
                                onClick={toggleMobileMenu}
                                className={clsx(
                                    "header-hover lg:hidden p-2 rounded-full transition-all duration-200",
                                    isMobileMenuOpen && "bg-green-100 dark:bg-green-900"
                                )}
                                style={{
                                    backgroundColor: 'var(--header-hover)',
                                    color: 'var(--header-accent)'
                                }}
                                aria-label={isMobileMenuOpen ? "Đóng menu" : "Mở menu"}
                                aria-expanded={isMobileMenuOpen}
                            >
                                {isMobileMenuOpen ? (
                                    <X className="w-5 h-5 transform rotate-90 transition-transform duration-200" />
                                ) : (
                                    <Menu className="w-5 h-5" />
                                )}
                            </button>

                            {/* Desktop Account Section - Hidden on mobile, shown in mobile menu */}
                            <div className="hidden lg:block">
                                {user ? (
                                    // Logged in state - Desktop with dropdown
                                    <div className="relative" ref={userDropdownRef}>
                                        <button
                                            onClick={toggleUserDropdown}
                                            className="flex items-center space-x-3 p-2 rounded-full transition-all duration-200 group bg-white/80 dark:bg-slate-800/80 hover:bg-white dark:hover:bg-slate-700"
                                            aria-label="Menu tài khoản"
                                            aria-expanded={isUserDropdownOpen}
                                        >
                                            <div className="relative">
                                                <Image
                                                    src={user.avatar}
                                                    alt={user.name}
                                                    width={40}
                                                    height={40}
                                                    className="w-10 h-10 rounded-full border-2 border-green-300 dark:border-green-400 group-hover:border-green-400 dark:group-hover:border-green-300 transition-colors duration-200"
                                                />
                                                {user.vipLevel > 0 && (
                                                    <Crown className="absolute -top-1 -right-1 w-4 h-4 text-yellow-500" />
                                                )}
                                            </div>
                                            <div className="text-left">
                                                <p className="header-text-primary text-sm font-medium" data-sync-text="primary">
                                                    {user.name}
                                                </p>
                                                <p className={clsx(
                                                    'text-xs px-2 py-0.5 rounded-full font-medium',
                                                    CULTIVATION_COLORS[user.cultivationLevel as keyof typeof CULTIVATION_COLORS]
                                                )}>
                                                    {user.cultivationLevel}
                                                </p>
                                            </div>
                                            <ChevronDown className={clsx(
                                                'w-4 h-4 transition-transform duration-200 text-gray-500 dark:text-gray-400',
                                                isUserDropdownOpen && 'rotate-180'
                                            )} />
                                        </button>

                                        {/* User Dropdown Menu */}
                                        <div className={clsx(
                                            'user-dropdown absolute right-0 mt-2 w-64 bg-white/95 dark:bg-slate-800/95 backdrop-blur-xl rounded-xl py-2 z-50 border border-gray-200/50 dark:border-slate-600/50 shadow-2xl transition-all duration-300',
                                            isUserDropdownOpen
                                                ? 'opacity-100 visible translate-y-0'
                                                : 'opacity-0 invisible -translate-y-2'
                                        )}>
                                            {/* User Info Header */}
                                            <div className="px-4 py-3 border-b border-gray-200/50 dark:border-slate-600/50">
                                                <p className="font-medium text-gray-900 dark:text-gray-100">{user.name}</p>
                                                <p className="text-sm text-gray-600 dark:text-gray-400">{user.email}</p>
                                                <div className="flex items-center justify-between mt-2">
                                                    <span className={clsx(
                                                        'text-xs px-2 py-1 rounded-full font-medium',
                                                        CULTIVATION_COLORS[user.cultivationLevel as keyof typeof CULTIVATION_COLORS]
                                                    )}>
                                                        {user.cultivationLevel}
                                                    </span>
                                                    <div className="flex items-center space-x-1 text-yellow-500">
                                                        <Star className="w-4 h-4" />
                                                        <span className="text-xs font-medium">{user.points}</span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Menu Items */}
                                            {userDropdownItems(handleLogout).map((item, index) => (
                                                item.divider ? (
                                                    <div key={index} className="my-1 border-t border-gray-200/50 dark:border-slate-600/50" />
                                                ) : item.onClick ? (
                                                    <button
                                                        key={index}
                                                        onClick={item.onClick}
                                                        className={clsx(
                                                            'w-full flex items-center space-x-3 px-4 py-2 text-sm transition-colors duration-200 hover:bg-gray-50 dark:hover:bg-slate-700/50 text-left',
                                                            item.danger
                                                                ? 'text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20'
                                                                : 'text-gray-900 dark:text-gray-100'
                                                        )}
                                                    >
                                                        {item.icon}
                                                        <span>{item.label}</span>
                                                    </button>
                                                ) : (
                                                    <Link
                                                        key={index}
                                                        href={item.href || '#'}
                                                        onClick={closeUserDropdown}
                                                        className={clsx(
                                                            'flex items-center space-x-3 px-4 py-2 text-sm transition-colors duration-200 hover:bg-gray-50 dark:hover:bg-slate-700/50',
                                                            item.danger
                                                                ? 'text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20'
                                                                : 'text-gray-900 dark:text-gray-100'
                                                        )}
                                                    >
                                                        {item.icon}
                                                        <span>{item.label}</span>
                                                    </Link>
                                                )
                                            ))}
                                        </div>
                                    </div>
                                ) : (
                                    // Not logged in state - Desktop only
                                    <button
                                        onClick={handleLogin}
                                        disabled={isLoading}
                                        className="bg-green-500 hover:bg-green-600 text-white flex items-center space-x-2 px-4 py-2 rounded-full font-medium transition-all duration-200 hover:scale-105 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
                                        aria-label="Đăng nhập tài khoản"
                                    >
                                        {isLoading ? (
                                            <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                                        ) : (
                                            <UserIcon className="w-5 h-5" />
                                        )}
                                        <span>{isLoading ? 'Đang tải...' : 'Tài Khoản'}</span>
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section 2: Navigation Menu */}
            <HomeNavigation menuItems={mainMenuItems} />

            {/* Mobile Menu Overlay - Right-side navigation panel */}
            <MobileMenu isLoading={isLoading} isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} user={user} onLogin={handleLogin} onLogout={handleLogout} menuItems={mainMenuItems} />
        </header>
    );
};