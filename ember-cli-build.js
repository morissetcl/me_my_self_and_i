'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    dotEnv: {
      clientAllowedKeys: ['CLOUD_NAME', 'CLOUDINARY_API_KEY']
    }
  });

  return app.toTree();
};
