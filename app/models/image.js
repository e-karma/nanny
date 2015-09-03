import DS from 'ember-data';
import config from '../config/environment';

export default DS.Model.extend({
  file: DS.attr('file'),
  imageUrl: Ember.computed('file', function() {
    return config.appApiHost + this.get('file');
  })
});
