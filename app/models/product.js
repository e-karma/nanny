import Ember from 'ember';
import DS from 'ember-data';
import config from '../config/environment';

export default DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  price: DS.attr('number'),
  inStock: DS.attr('boolean'),
  categories: DS.hasMany('category', { async: true } ),
  images: DS.hasMany('image', { async: true } )
});
