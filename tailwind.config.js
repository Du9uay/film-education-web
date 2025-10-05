/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: { 
          50: '#E5DFD7',   // text-cashmere-100 - 浅文本与分隔
          800: '#8A9B8F',  // surf-tundra-700 - 次级背景/卡片底
          900: 'color-mix(in oklab, #7A9E9F 86%, #000 14%)'   // bg-ocean-900 - 深背景/主背景
        },
        accent: { 
          500: '#D4B483'   // accent-sand-500 - 品牌强调色/沙土色
        },
        // 保留原有颜色供兼容
        primary: {
          50: '#f0f4ff',
          100: '#e1eaff',
          200: '#c7d7ff',
          300: '#a3b9ff',
          400: '#7c94ff',
          500: '#667eea',
          600: '#5a67d8',
          700: '#4c51bf',
          800: '#434190',
          900: '#3c366b',
        },
        secondary: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7c3aed',
          800: '#6b21a8',
          900: '#581c87',
        }
      },
      backdropBlur: {
        xs: '2px',
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
        '2xl': '40px',
      },
      backdropSaturate: {
        150: '150%',
        175: '175%',
        200: '200%',
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(0, 0, 0, 0.1), 0 0 0 0.5px rgba(255, 255, 255, 0.1) inset',
        'glass-hover': '0 12px 48px rgba(0, 0, 0, 0.15), 0 0 0 0.5px rgba(255, 255, 255, 0.2) inset',
        'glass-sm': '0 4px 24px rgba(0, 0, 0, 0.08), 0 0 0 0.5px rgba(255, 255, 255, 0.08) inset',
        'glass-lg': '0 20px 60px rgba(0, 0, 0, 0.12), 0 0 0 0.5px rgba(255, 255, 255, 0.15) inset',
        'inner-light': '0 0 0 0.5px rgba(255, 255, 255, 0.1) inset',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
} 