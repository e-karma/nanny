import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.findAll('product');
  },

  afterModel: function() {
    return this.store.findAll('category');
  },

  setupController: function(controller, model) {
    controller.setProperties({
      products: model,
      categories: this.store.peekAll('category')
    });
  },

  actions: {
    redirectToItem: function(product) {
      this.transitionTo('store.show', product);
    },

    willTransition: function() {
      this.controllerFor('store.index').set('modalIsOpen', false);
    }
  }
});
