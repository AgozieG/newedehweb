


// tailwind.config.js
export default {
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
        sansAlt: ['"DM Sans"', 'sans-serif'],
        accent: ['Cormorant Garamond', 'serif'],
      },
      colors: {
        amber: {
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
          700: "#b45309",
          800: "#92400e",
          900: "#78350f",
        },
        dark: "#0f0f0f",
        cream: "#faf9f7",
        gold: {
          DEFAULT: "#d4af37",
          light: "#e5c76b",
          dark: "#b8960c",
        },
      },
    },
  },
};