'use client';

import { AuthContextType, User } from '@/types';
import { createContext, ReactNode, useContext, useState } from 'react';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const login = async (userData?: User) => {
        setIsLoading(true);

        if (userData) {
            setUser(userData);
        } else {
            await new Promise(resolve => setTimeout(resolve, 500));
        }

        setIsLoading(false);
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, isLoading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}