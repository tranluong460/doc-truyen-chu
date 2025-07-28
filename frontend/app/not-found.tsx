import { Button } from '@/components/ui';
import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-jade-50 dark:from-slate-900 dark:to-slate-800">
            <div className="mx-auto max-w-md text-center space-y-6 p-8">
                <div className="space-y-2">
                    <h1 className="text-6xl font-bold bg-gradient-to-r from-jade-600 to-emerald-600 bg-clip-text text-transparent">
                        404
                    </h1>
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                        Trang không tồn tại
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">
                        Trang bạn đang tìm kiếm có thể đã bị xóa, đổi tên hoặc tạm thời không khả dụng.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/">
                        <Button variant="primary">
                            Về trang chủ
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}