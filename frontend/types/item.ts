export interface MenuItem {
    label: string;
    href: string;
    icon: React.ReactNode;
    isHot?: boolean;
    isNew?: boolean;
    children?: Array<{
        label: string;
        href: string;
    }>;
}