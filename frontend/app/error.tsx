'use client';

import { Button } from '@/components/ui';
import { ErrorProps } from '@/types';
import { useEffect } from 'react';

export default function Error({ error, reset }: ErrorProps) {
    useEffect(() => {
        console.error('Application error:', error);
    }, [error]);

    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-jade-50 dark:from-slate-900 dark:to-slate-800">
            <div className="mx-auto max-w-md text-center space-y-6 p-8">
                <div className="space-y-2">
                    <h1 className="text-4xl font-bold text-jade-800 dark:text-jade-300">
                        500
                    </h1>
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                        Lỗi máy chủ nội bộ
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">
                        Đã xảy ra lỗi không mong muốn. Chúng tôi đang khắc phục sự cố này.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button onClick={() => reset()}>
                        Thử lại
                    </Button>
                    <Button
                        onClick={() => window.location.href = '/'}
                        variant="outline"
                    >
                        Về trang chủ
                    </Button>
                </div>

                {process.env.NODE_ENV === 'development' && (
                    <details className="mt-8 text-left">
                        <summary className="cursor-pointer text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Chi tiết lỗi (Development)
                        </summary>
                        <pre className="text-xs bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-auto whitespace-pre-wrap">
                            {error.message}
                            {error.stack && '\n\nStack trace:\n' + error.stack}
                        </pre>
                    </details>
                )}
            </div>
        </div>
    );
}