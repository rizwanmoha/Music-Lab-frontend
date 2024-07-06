/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {},
  },
  plugins: ['@tailwindcss/forms', require('flowbite/plugin')],
};

// module.exports = {

//   plugins: [
//       require('flowbite/plugin')
//   ]

// }
// module.exports = {

//   content: [
//       // ...
//       'node_modules/flowbite-react/lib/esm/**/*.js'
//   ]

// }