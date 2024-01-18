const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'screen1',

  exposes: {
    './Screen1Module': 'projects/screen1/src/app/screen1/screen1.module.ts',
    './Screen1HomeComponent': 'projects/screen1/src/app/screen1/screen1-home/screen1-home.component.ts'
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
