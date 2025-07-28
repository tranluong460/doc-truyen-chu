export interface User {
    id: string;
    name: string;
    avatar: string;
    email: string;
    cultivationLevel: string;
    points: number;
    vipLevel: number;
}

export interface AuthContextType {
    user: User | null;
    isLoading: boolean;
    login: (userData?: User) => Promise<void>;
    logout: () => void;
}