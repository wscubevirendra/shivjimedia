const flowbite = require("flowbite-react/tailwind");
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        'first': 'hsl(14, 98%, 50%)',
        'black-light': 'hsl(0, 0%, 40%)',
        'container': 'hsl(0, 0%, 83%)'
      },
      fontFamily: {
        body: ['Bai Jamjuree', 'sans-serif']
      }
    },
  },
  plugins: [
      
      flowbite.plugin(),
  ],
}
