import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    save() {
      let emailEmail = this.get('model.email')
      let emailContent = this.get('model.content')
      let newEmail = this.store.createRecord('email', {
        email: emailEmail,
        content: emailContent
      })
      newEmail.save()
    }
  }
});
