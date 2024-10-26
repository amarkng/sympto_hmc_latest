/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'gray-diag': '#F2F5FA',
        'hapus-diag': '#989898',
        'article-blue': '#0F67FD',
        'gray-table': '#475467',
      },
    },
  },
  plugins: [],
};
