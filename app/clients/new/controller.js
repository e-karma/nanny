import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    cancel: function() {
      this.get('model').destroyRecord();
      window.history.back();
    },
    closeModal: function() {
      this.get('model').destroyRecord();
      window.history.back();
    }
  }
});
