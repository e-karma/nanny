import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement: function() {
    // this.$().slider();
    this.$().slider({height:300});
  }
});
