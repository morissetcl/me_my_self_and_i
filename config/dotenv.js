
/* eslint-env node */

'use strict';

const path = require('path');

module.exports = function(env) {
  // $ ember deploy production
  // [0] = node
  // [1] = ember
  // [2] command = deploy
  // [3] target = production
  const [,, command, target] = process.argv;

  if (command && target && command === 'deploy') {
    env = target;
  }

  const isProd = env == 'production';
  const isStaging = env == 'staging';
  const envFile = (isProd || isStaging) ? `.env.deploy.${env}` : '.env';

  return {
    clientAllowedKeys: ['CLOUD_NAME', 'CLOUDINARY_API_KEY'],
    path: path.join(__dirname, '..', envFile)
  };
};
