import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return {};
  },
  actions: {
    save() {
      const newEmail = this.get('store').createRecord('email', this.currentModel);
      newEmail.save().then((email) => {
        this.transitionTo('emails');
      });
    }
  }
});
