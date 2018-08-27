import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.get('store').findAll('article').then(results => results.sortBy('createdAt'));
  }
 });
