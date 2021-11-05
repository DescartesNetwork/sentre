const CracoLessPlugin = require('craco-less')

const theme = {
  hack: `true;@import "${require.resolve('./src/static/theme/index.less')}"`,
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
