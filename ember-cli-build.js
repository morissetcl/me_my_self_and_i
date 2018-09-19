'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
let nodeSass = require('node-sass');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    dotEnv: {
      clientAllowedKeys: ['CLOUD_NAME', 'CLOUDINARY_API_KEY']
    },
    sassOptions: {
      implementation: nodeSass
    }
  });

  return app.toTree();
};
