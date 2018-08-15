import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  summerize: DS.attr(),
  link: DS.attr(),
  created_at: DS.attr(),
  image: DS.attr()
});
