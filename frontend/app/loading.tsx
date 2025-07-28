export default function Loading() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 to-jade-50 dark:from-slate-900 dark:to-slate-800">
            <div className="text-center space-y-4">
                <div className="relative mx-auto h-12 w-12">
                    <div className="absolute inset-0 rounded-full border-4 border-jade-200 dark:border-jade-800"></div>
                    <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-jade-600 dark:border-t-jade-400"></div>
                </div>

                <div className="space-y-2">
                    <h2 className="text-lg font-semibold text-jade-800 dark:text-jade-300">
                        Đang tải...
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        Vui lòng chờ trong giây lát
                    </p>
                </div>

                <div className="flex justify-center space-x-1">
                    {Array.from({ length: 3 }).map((_, i) => (
                        <div
                            key={i}
                            className="h-2 w-2 bg-jade-600 rounded-full animate-pulse"
                            style={{
                                animationDelay: `${i * 0.2}s`,
                                animationDuration: '1s'
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}