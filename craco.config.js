require('dotenv-cra').config() // https://github.com/gsoft-inc/craco/issues/180

const { CracoDefaultLessPlugin } = require('./plugins/craco-less')
const CracoTheme = require('./plugins/craco-theme')

module.exports = {
  plugins: [
    {
      plugin: CracoDefaultLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
            // modifyVars: require('./src/static/theme'),
          },
        },
      },
    },
    {
      plugin: CracoTheme,
      options: {
        theme: ['light', 'dark'],
        appId: process.env.REACT_APP_ID,
      },
    },
  ],
}
