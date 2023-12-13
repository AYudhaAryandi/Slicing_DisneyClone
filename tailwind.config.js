/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'grey' :'#2f383f'
      },
    },
  },
  plugins: [ require('tailwind-scrollbar-hide')
  
],
}
