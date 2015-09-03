import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    bookHer: function() {
      this.set('isBooking', true);
    },

    closeModal: function() {
      this.set('isBooking', false);
    },

    agree: function() {
      this.set('isBooking', false);
    }
  }
});
