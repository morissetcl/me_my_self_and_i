import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    filterByTags(param) {
      if (param !== '') {
        return this.store.query('article', { tags: param });
      } else {
        return this.store.findAll('article');
      }
    }
  }
});
