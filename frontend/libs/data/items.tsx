import { BookOpen, Clock, Filter, LogOut, Settings, TrendingUp, UserIcon } from 'lucide-react';

// User dropdown menu items (following HomeHeader pattern)
export const userDropdownItems = (handleLogout: () => void) => [
    {
        label: 'Tủ Truyện',
        href: '/user/tu-truyen',
        icon: <BookOpen className="w-4 h-4" />
    },
    {
        label: 'Hồ Sơ',
        href: '/user/profile',
        icon: <UserIcon className="w-4 h-4" />
    },
    {
        label: 'Cài Đặt',
        href: '/user/profile/thong-bao',
        icon: <Settings className="w-4 h-4" />
    },
    { divider: true, label: '' },
    {
        label: 'Đăng Xuất',
        onClick: handleLogout,
        icon: <LogOut className="w-4 h-4" />,
        danger: true
    }
];

// Static menu items (same as HomeHeaderClient)
export const mainMenuItems = [
    {
        label: 'Thể Loại',
        href: '/truyen/the-loai',
        icon: <BookOpen className="w-4 h-4" />,
        children: [
            { label: 'Tu Tiên', href: '/tu-tien' },
            { label: 'Huyền Huyễn', href: '/huyen-huyen' },
            { label: 'Kiếm Hiệp', href: '/kiem-hiep' },
            { label: 'Đô Thị', href: '/do-thi' }
        ]
    },
    {
        label: 'Truyện Hot',
        href: '/top',
        icon: <TrendingUp className="w-4 h-4" />,
        isHot: true
    },
    {
        label: 'Truyện Mới',
        href: '/truyen',
        icon: <Clock className="w-4 h-4" />,
        isNew: true
    },
    {
        label: 'Tìm Kiếm Nâng Cao',
        href: '/tim-kiem',
        icon: <Filter className="w-4 h-4" />
    }
];