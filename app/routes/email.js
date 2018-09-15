import Route from '@ember/routing/route';

export default DS.Model.extend({
  email: DS.attr('string'),
  content: DS.attr('string'),
});
