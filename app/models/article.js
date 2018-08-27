import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  summerize: DS.attr(),
  link: DS.attr(),
  createdAt: DS.attr(),
  image: DS.attr()
});
