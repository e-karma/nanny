import Ember from 'ember';

export default Ember.Controller.extend({
  modalIsOpen: false,
  modalproduct: null,

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
    },

      sortByCategory: function(category) {
        this.transitionToRoute('store.category', category);
      },

      sortByAll: function() {
        this.transitionToRoute('store.index');
      }

  }
});
