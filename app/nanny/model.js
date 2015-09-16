import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  email: DS.attr('string'),
  password: DS.attr('string'),
  phone: DS.attr('string'),
  zipCode: DS.attr('string'),
  startDate: DS.attr(),
  endDate: DS.attr()
});
