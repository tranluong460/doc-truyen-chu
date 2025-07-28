import { MenuItem } from '@/types/item';
import { User } from '@/types/user';
import { ButtonHTMLAttributes } from 'react';

export type LayoutProps = {
    children: React.ReactNode;
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg' | 'xl';
    isLoading?: boolean;
}

export interface ErrorProps {
    error: Error & { digest?: string };
    reset: () => void;
}

export interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
    user: User | null;
    isLoading: boolean;
    onLogin: () => void;
    onLogout: () => void;
    menuItems: MenuItem[];
}

export interface HomeNavigationProps {
    menuItems: MenuItem[];
}
