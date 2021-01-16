module.exports = {
  mount: {
    public: {url: '/', static: true},
    src: {url: '/'},
  },
  plugins: [
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-postcss',
  ],
  buildOptions: {
    baseUrl: '/fxrate',
  },
}
