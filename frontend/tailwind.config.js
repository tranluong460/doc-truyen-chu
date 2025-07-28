/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                // Keep only essential colors - Green primary system
                // Tailwind's default green palette is sufficient
            },

            // Custom fonts
            fontFamily: {
                'serif': ['Noto Serif SC', 'serif'],
                'sans': ['Inter', 'Noto Sans SC', 'sans-serif'],
            },

            // Custom animations
            animation: {
                'dropdown-fade-in': 'dropdownFadeIn 0.2s ease-out',
                'glow-pulse': 'glowPulse 2s ease-in-out infinite alternate',
                'float': 'float 3s ease-in-out infinite',
                'shimmer': 'shimmer 2s linear infinite',
                'in': 'fadeIn 0.2s ease-out',
                'fade-in': 'fadeIn 0.2s ease-out',
                'zoom-in-95': 'zoomIn95 0.2s ease-out',
            },

            keyframes: {
                dropdownFadeIn: {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(-10px) scale(0.95)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0) scale(1)'
                    },
                },
                glowPulse: {
                    '0%': {
                        boxShadow: '0 0 5px rgba(34, 197, 94, 0.5)'
                    },
                    '100%': {
                        boxShadow: '0 0 20px rgba(34, 197, 94, 0.8), 0 0 30px rgba(34, 197, 94, 0.4)'
                    },
                },
                float: {
                    '0%, 100%': {
                        transform: 'translateY(0px)'
                    },
                    '50%': {
                        transform: 'translateY(-5px)'
                    },
                },
                shimmer: {
                    '0%': {
                        backgroundPosition: '-200% 0'
                    },
                    '100%': {
                        backgroundPosition: '200% 0'
                    },
                },
                fadeIn: {
                    '0%': {
                        opacity: '0'
                    },
                    '100%': {
                        opacity: '1'
                    },
                },
                zoomIn95: {
                    '0%': {
                        opacity: '0',
                        transform: 'scale(0.95)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'scale(1)'
                    },
                },
            },

            // Custom gradients
            backgroundImage: {
                'gradient-immortal': 'linear-gradient(135deg, #10b981 0%, #06b6d4 50%, #3b82f6 100%)',
                'gradient-celestial': 'linear-gradient(135deg, #f59e0b 0%, #ef4444 50%, #8b5cf6 100%)',
                'gradient-cultivation': 'linear-gradient(135deg, #059669 0%, #0891b2 25%, #2563eb 50%, #7c3aed 75%, #dc2626 100%)',
                'shimmer-gradient': 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
            },

            // Custom shadows
            boxShadow: {
                'glow-sm': '0 0 10px rgba(34, 197, 94, 0.3)',
                'glow': '0 0 20px rgba(34, 197, 94, 0.4)',
                'glow-lg': '0 0 30px rgba(34, 197, 94, 0.5)',
                'immortal': '0 10px 25px rgba(6, 182, 212, 0.3)',
                'celestial': '0 10px 25px rgba(245, 158, 11, 0.3)',
            },

            // Custom spacing
            spacing: {
                '18': '4.5rem',
                '88': '22rem',
            },

            // Custom z-index
            zIndex: {
                '60': '60',
                '70': '70',
                '80': '80',
                '90': '90',
                '100': '100',
            },

            // Custom backdrop blur
            backdropBlur: {
                'xs': '2px',
            },
        },
    },
    plugins: [
        // Plugin cho custom utilities
        function ({ addUtilities, theme }) {
            const newUtilities = {
                // Cultivation level indicators
                '.cultivation-qi': {
                    background: theme('colors.cultivation.qi'),
                    color: 'white',
                },
                '.cultivation-foundation': {
                    background: theme('colors.cultivation.foundation'),
                    color: 'white',
                },
                '.cultivation-golden': {
                    background: theme('colors.cultivation.golden'),
                    color: 'white',
                },
                '.cultivation-nascent': {
                    background: theme('colors.cultivation.nascent'),
                    color: 'white',
                },
                '.cultivation-spirit': {
                    background: theme('colors.cultivation.spirit'),
                    color: 'white',
                },
                '.cultivation-great': {
                    background: theme('colors.cultivation.great'),
                    color: 'white',
                },

                // Glow effects
                '.glow-emerald': {
                    boxShadow: '0 0 20px rgba(34, 197, 94, 0.5)',
                },
                '.glow-cyan': {
                    boxShadow: '0 0 20px rgba(6, 182, 212, 0.5)',
                },
                '.glow-gold': {
                    boxShadow: '0 0 20px rgba(245, 158, 11, 0.5)',
                },

                // Text gradients
                '.text-gradient-immortal': {
                    background: 'linear-gradient(135deg, #10b981 0%, #06b6d4 50%, #3b82f6 100%)',
                    '-webkit-background-clip': 'text',
                    '-webkit-text-fill-color': 'transparent',
                    'background-clip': 'text',
                },
                '.text-gradient-celestial': {
                    background: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 50%, #8b5cf6 100%)',
                    '-webkit-background-clip': 'text',
                    '-webkit-text-fill-color': 'transparent',
                    'background-clip': 'text',
                },

                // Button utilities
                '.btn-primary-gradient': {
                    background: theme('colors.jade.600'),
                    color: 'white',
                    border: 'none',
                    transition: 'all 0.2s ease',
                },
                '.btn-primary-gradient:hover': {
                    background: theme('colors.jade.700'),
                    transform: 'translateY(-1px)',
                    boxShadow: '0 4px 12px rgba(34, 197, 94, 0.4)',
                },
            }

            addUtilities(newUtilities)
        }
    ],
}