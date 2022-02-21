module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      gizmo: ["Gizmo", "sans-serif"],
      nordiqueproregular: ["NordiqueProRegular", "sans-serif"]
    },
    extend: {
      colors: {
        'primary-blue': '#125da9',
        'aboutme-green': '#e6f6f4',
        'beautytreatment-blue': '#0093b1',
        'beautytreatment-green': '#01a28d',
        'aftercare-blue': '#0092b1',
        'holistic-purple': '#a380b8',
        'gradient-start': '#01a28d',
        'gradient-end': '#005da9',
      },
      backgroundImage: {
        'beauty-banner-lg': "url('../src/assets/banners/beauty-lg.jpg')",
        'holistic-banner-lg': "url('../src/assets/banners/holistic-lg.jpg')",
        'signoff-lg': "url('../src/assets/footer/TTC_Website Signoff_Large.jpg')",
      },
    },
  },
  plugins: [],
}