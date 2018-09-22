import Controller from '@ember/controller';
import swal from 'sweetalert'

export default Controller.extend({
  actions: {
    save() {
      let emailEmail = this.get('model.email')
      let emailContent = this.get('model.content')
      let newEmail = this.store.createRecord('email', {
        email: emailEmail,
        content: emailContent
      })
      newEmail.validate()
              .then(({ validations }) => {
                if (validations.get('isValid')) {
                  newEmail.save()
                  this.set('email', null);
                  this.set('content', null);
                  swal("Email send", " I will answer you ASAP.", "success")
                } else {
                  swal("Aie", "Please check and try again.",  "error" )
                }
              });
    }
  }
});
