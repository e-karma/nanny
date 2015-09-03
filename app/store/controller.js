import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    sortByCategory: function(category) {
      this.transitionToRoute('store.category', category);
    },

    sortByAll: function() {
      this.transitionToRoute('store.index');
    }
  }
});
