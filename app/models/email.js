import DS from 'ember-data';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  email: [
    validator('presence', true),
    validator('format', { type: 'email' })
  ],
  content: validator('presence', true)
});

export default DS.Model.extend(Validations, {
  email: DS.attr('string'),
  content: DS.attr('string'),
});
