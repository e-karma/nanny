import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return Ember.RSVP.hash({
      product: this.store.findRecord('product', params.product_id),
      events: this.store.query('event', { user_id: params.product_id } )
    });
  },

  setupController: function(controller, models) {
    let product = models.product;
    let events = models.events;

    controller.set('model', product);
    controller.set('events', events);
  }


});
