import { ButtonProps } from '@/types';
import { clsx } from 'clsx';
import { forwardRef } from 'react';

/**
 * Button Component - Simplified with Green Primary Color System
 * 
 * VARIANTS:
 * - primary: Green solid button (#22c55e)
 * - secondary: Gray subtle button
 * - outline: Green border with transparent background
 * - ghost: Transparent with green text
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({
        className,
        variant = 'primary',
        size = 'md',
        isLoading = false,
        children,
        disabled,
        ...props
    }, ref) => {
        return (
            <button
                className={clsx(
                    // Base styles
                    'inline-flex items-center justify-center font-medium rounded-lg',
                    'cursor-pointer select-none outline-none',
                    'disabled:pointer-events-none disabled:opacity-50',
                    'focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-500',
                    'transition-all duration-200 ease-out',

                    // Size variants
                    {
                        'h-8 px-3 text-sm': size === 'sm',
                        'h-10 px-4 text-sm': size === 'md',
                        'h-12 px-6 text-base': size === 'lg',
                        'h-14 px-8 text-lg': size === 'xl',
                    },

                    // Variant styles
                    {
                        // PRIMARY - Green solid
                        'bg-green-500 text-white hover:bg-green-600 active:bg-green-700 hover:scale-105 hover:-translate-y-0.5 hover:shadow-lg':
                            variant === 'primary',

                        // SECONDARY - Gray subtle
                        'bg-gray-100 text-gray-900 hover:bg-gray-200 active:bg-gray-300 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700':
                            variant === 'secondary',

                        // OUTLINE - Green border
                        'border-2 border-green-500 text-green-600 hover:bg-green-50 active:bg-green-100 dark:text-green-400 dark:hover:bg-green-950':
                            variant === 'outline',

                        // GHOST - Transparent
                        'text-green-600 hover:bg-green-50 active:bg-green-100 dark:text-green-400 dark:hover:bg-green-950':
                            variant === 'ghost',
                    },

                    className
                )}
                disabled={disabled || isLoading}
                ref={ref}
                {...props}
            >
                {/* Loading spinner */}
                {isLoading && (
                    <div className="mr-2 w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                )}

                {children}
            </button>
        );
    }
);

Button.displayName = 'Button';

export { Button };

