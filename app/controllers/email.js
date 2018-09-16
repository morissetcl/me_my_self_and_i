import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    createEmail() {
      let emailEmail = this.get('emailEmail')
      let emailContent = this.get('emailContent')
      let newRecord = this.store.createRecord('email', {
        email: emailEmail,
        content: emailContent
      })
      newRecord.save()
    }
  }
});
