module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      white: '#F6F7EB',
      dark: '#393E41',
      primary: '#00563f',
      secondary: '#9c7c38',
      tertiary: '#A30026',
      gray: '#eeefef',
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
