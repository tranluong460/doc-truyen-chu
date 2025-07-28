import { BookOpen, Clock, Search, TrendingUp } from 'lucide-react'

export const HomeSearch = () => {
    return <div className="flex-1 max-w-2xl mx-4 lg:mx-8">
        <form className="relative group">
            <div className="search-container relative">
                <div className="search-input-wrapper">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500 z-10 pointer-events-none" />
                    <input
                        className="w-full pl-12 pr-16 py-3 rounded-full text-sm lg:text-base transition-all duration-300 focus:outline-none bg-white/90 dark:bg-slate-800/90 border-2 border-green-200/50 dark:border-slate-600/50 backdrop-filter backdrop-blur-sm hover:border-green-300 dark:hover:border-slate-500 focus:border-green-500 dark:focus:border-green-400 focus:bg-white dark:focus:bg-slate-800"
                        type="text"
                        placeholder="Tìm truyện, tác giả..."
                        aria-label="Tìm kiếm truyện"
                    />
                </div>
            </div>

            {/* Enhanced Command Palette Dropdown */}
            <div className="command-palette-static absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-full max-w-2xl z-50 opacity-0 invisible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-400 delay-200">
                <div className="command-palette-container bg-gradient-to-br from-gray-50/95 via-white/90 to-gray-100/95 dark:from-slate-700/95 dark:via-slate-600/90 dark:to-slate-800/95 backdrop-blur-xl border border-gray-200/50 dark:border-slate-600/50 rounded-2xl shadow-2xl p-6 mx-4 sm:mx-0">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-200/50 dark:border-slate-600/50">
                        <h3 className="text-center flex-1 text-lg font-semibold text-gray-800 dark:text-gray-200">
                            Tìm kiếm nhanh
                        </h3>
                        <kbd className="px-2 py-1 text-xs bg-gray-200/50 dark:bg-slate-600/50 rounded border font-mono">ESC</kbd>
                    </div>

                    {/* Quick Actions */}
                    <div className="space-y-3 mb-6">
                        <div className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3 text-center">
                            Hành động nhanh
                        </div>
                        <div className="grid gap-2">
                            <div className="command-palette-item flex items-center space-x-3 p-3 rounded-xl hover:bg-white/70 dark:hover:bg-slate-600/70 transition-all duration-200 cursor-pointer group">
                                <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                                    <BookOpen className="w-4 h-4 text-white" />
                                </div>
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 flex-1">Tìm theo thể loại</span>
                                <kbd className="ml-auto px-2 py-1 text-xs bg-gray-200/50 dark:bg-slate-600/50 rounded font-mono">⌘T</kbd>
                            </div>
                            <div className="command-palette-item flex items-center space-x-3 p-3 rounded-xl hover:bg-white/70 dark:hover:bg-slate-600/70 transition-all duration-200 cursor-pointer group">
                                <div className="w-8 h-8 bg-gradient-to-br from-red-400 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                                    <TrendingUp className="w-4 h-4 text-white" />
                                </div>
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 flex-1">Truyện hot</span>
                                <kbd className="ml-auto px-2 py-1 text-xs bg-gray-200/50 dark:bg-slate-600/50 rounded font-mono">⌘H</kbd>
                            </div>
                            <div className="command-palette-item flex items-center space-x-3 p-3 rounded-xl hover:bg-white/70 dark:hover:bg-slate-600/70 transition-all duration-200 cursor-pointer group">
                                <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                                    <Clock className="w-4 h-4 text-white" />
                                </div>
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 flex-1">Truyện mới</span>
                                <kbd className="ml-auto px-2 py-1 text-xs bg-gray-200/50 dark:bg-slate-600/50 rounded font-mono">⌘N</kbd>
                            </div>
                        </div>
                    </div>

                    {/* Sample Search Results */}
                    <div className="space-y-2 mb-4">
                        <div className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3 text-center">
                            Gợi ý tìm kiếm
                        </div>
                        <div className="command-palette-item flex items-center space-x-3 p-3 rounded-xl hover:bg-white/70 dark:hover:bg-slate-600/70 transition-all duration-200 cursor-pointer">
                            <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg flex items-center justify-center">
                                <BookOpen className="w-5 h-5 text-white" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">
                                    Đấu Phá Thương Khung
                                </div>
                                <div className="text-xs text-gray-500 dark:text-gray-400 truncate">
                                    Thiên Tằm Thổ Đậu • Tu Tiên
                                </div>
                            </div>
                            <div className="text-xs text-gray-400 dark:text-gray-500 flex items-center">
                                ⭐ 4.8
                            </div>
                        </div>
                        <div className="command-palette-item flex items-center space-x-3 p-3 rounded-xl hover:bg-white/70 dark:hover:bg-slate-600/70 transition-all duration-200 cursor-pointer">
                            <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center">
                                <BookOpen className="w-5 h-5 text-white" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">
                                    Vũ Động Càn Khôn
                                </div>
                                <div className="text-xs text-gray-500 dark:text-gray-400 truncate">
                                    Thiên Tằm Thổ Đậu • Huyền Huyễn
                                </div>
                            </div>
                            <div className="text-xs text-gray-400 dark:text-gray-500 flex items-center">
                                ⭐ 4.7
                            </div>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-center space-x-6 pt-3 border-t border-gray-200/50 dark:border-slate-600/50 text-xs text-gray-500 dark:text-gray-400">
                        <div className="flex items-center space-x-1">
                            <kbd className="px-1.5 py-0.5 bg-gray-200/50 dark:bg-slate-600/50 rounded font-mono">↑↓</kbd>
                            <span>điều hướng</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <kbd className="px-1.5 py-0.5 bg-gray-200/50 dark:bg-slate-600/50 rounded font-mono">↵</kbd>
                            <span>chọn</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <kbd className="px-1.5 py-0.5 bg-gray-200/50 dark:bg-slate-600/50 rounded font-mono">ESC</kbd>
                            <span>đóng</span>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>

}