/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'blue-custom': '#173BA6',
      },
      fontSize: {

        'ssm': '0.6rem',
        'sssm': '0.65rem',
        'sm': '0.8rem',
        'font-dh': '0.85rem',
        'base': '1rem',
        'xl': '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      }
    },
    borderWidth: {
      '1': '2px',
      '2': '1rem',
    },
    borderRadius: {
      'large': '4px',
      'full': '9999px',
    },
  },
  plugins: [],
}
