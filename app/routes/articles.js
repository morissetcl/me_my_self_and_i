import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.get('store', function(db, request) {
        if(request.queryParams.tags !== undefined) {
          let filteredArticles = articles.filter(function(i) {
            return i.attributes.tags.toLowerCase().indexOf(request.queryParams.tags.toLowerCase()) !== -1;
          });
          return { data: filteredArticles };
        } else {
          return { data: articles };
        }
      });
    }
 });
