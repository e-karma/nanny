import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('blog', function() {
    this.route('show', { path: 'posts/:post_id' } );
    this.route('tag', { path: 'tags/:tag_id'});
  });
  this.route('store', function() {
    this.route('show', { path: 'products/:product_id' } );
    this.route('category', { path: 'categories/:category_id' } );
  });

  this.route('login');
  this.route('signup');

  this.route('photos');
  this.route('book');
  this.route('contact');
  this.route('booking');
  this.route('clients', function() {
    this.route('new');
  });
  this.route('nannies', function() {
    this.route('new');
  });
});

export default Router;
