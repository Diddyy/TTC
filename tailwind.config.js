module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      gizmo: ["Gizmo", "sans-serif"],
      nordiqueproregular: ["NordiqueProRegular", "sans-serif"],
      sourcesanspro: ["Source Sans Pro", "sans-serif"],
    },
    extend: {
      colors: {
        'primary-blue': '#0E3E8A',
        'primary-green': '#01A28D',
        'primary-turquoise': '#0092B1',
        'primary-lightblue': '#005CA8',
        'pale-green': '#E6F6F4',
        'default-text': '#736969',
        'aftercare-blue': '#0092b1',
        'holistic-purple': '#a380b8',
      },
      backgroundImage: {
        'beauty-banner-lg': "url('../src/assets/banners/beauty-lg.jpg')",
        'holistic-banner-lg': "url('../src/assets/banners/holistic-lg.jpg')",
        'signoff-lg': "url('../src/assets/footer/TTC_Website Signoff_Large.jpg')",
        'floral-lt': "url('../src/assets/branding/FloralDevice_LtPastel.svg')",
      },
    },
  },
  plugins: [],
}