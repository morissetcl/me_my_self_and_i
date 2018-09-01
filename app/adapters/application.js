// import Ember from 'ember';
// import JSONAPIAdapter from 'ember-data/adapters/json-api';
//
// const { String: { pluralize, underscore } } = Ember;
//
// export default JSONAPIAdapter.extend({
//
//   pathForType(type) {
//     return pluralize(underscore(type));
//   }
//
// });

import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  host: 'https://mmandi-api.herokuapp.com'
  // host: 'http://localhost:3000'
});
