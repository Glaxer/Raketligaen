module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      white: '#F6F7EB',
      dark: '#393E41',
      primary: '#A30026',
      secondary: '#1C4D73',
      orange: '#E94F37',
    },
    fontFamily: {
      oswald: ['Oswald'],
    },
    extend: {
      gridTemplateColumns: {
        body: '240px minmax(900px, 1fr)',
        footer: 'repeat(2, minmax(0, 1fr))',
      },
    },
  },
  plugins: [],
};
