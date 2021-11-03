const CracoLessPlugin = require('craco-less')

const theme = {
  hack: `true;@import "${require.resolve(
    './src/static/theme/styles/index.less',
  )}"; \n@import "${require.resolve(
    './src/static/theme/styles/dark-theme.less',
  )}"`,
}

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: theme,
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
}
