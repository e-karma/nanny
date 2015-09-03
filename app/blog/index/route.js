import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.query('post', { published: true } );
  },

  afterModel: function() {
    return this.store.findAll('tag');
  },

  setupController: function(controller, model) {
    controller.setProperties({
      model: model,
      tags: this.store.peekAll('tag')
    });
  }
});
