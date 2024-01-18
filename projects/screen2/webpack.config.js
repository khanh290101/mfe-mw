const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'screen2',

  exposes: {
    './Screen2Module': 'projects/screen2/src/app/screen2/screen2.module.ts',
    './Screen2HomeComponent': 'projects/screen2/src/app/screen2/screen2-home/screen2-home.component.ts'

  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
