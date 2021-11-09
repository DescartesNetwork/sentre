require('dotenv-cra').config() // https://github.com/gsoft-inc/craco/issues/180

const {
  CracoDarkLessPlugin,
  CracoDefaultLessPlugin,
} = require('./plugins/craco-less')

module.exports = {
  plugins: [
    {
      plugin: CracoDefaultLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
            modifyVars: require('./src/static/theme'),
          },
        },
      },
    },
    {
      plugin: CracoDarkLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
            modifyVars: require('./src/static/theme/dark'),
          },
        },
      },
    },
  ],
}
