import Ember from 'ember';

export default Ember.Controller.extend({
  modalIsOpen: false,
  modalproduct: null,

  imageUrl: function() {
      return "http://localhost:3000" + this.get('model.image');
    }.property('model'),

  actions: {
    openModal: function(product) {
      this.set('modalIsOpen', true);
      this.set('modalproduct', product);
    },

    agree: function() {
      this.set('modalIsOpen', false);
    },

    closeModal: function() {
      this.set('modalIsOpen', false);
    }
  }
});
