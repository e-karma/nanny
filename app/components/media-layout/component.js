import Ember from 'ember';

export default Ember.Component.extend({

  didReceiveAttrs: function() {
    window.fbAsyncInit = function() {
        FB.init({
          appId      : '819291504856177',
          xfbml      : true,
          version    : 'v2.4'
        });
      };

      (function(d, s, id){
         var js, fjs = d.getElementsByTagName(s)[0];
         if (d.getElementById(id)) {return;}
         js = d.createElement(s); js.id = id;
         js.src = "http://connect.facebook.net/en_US/sdk.js";
         fjs.parentNode.insertBefore(js, fjs);
       }(document, 'script', 'facebook-jssdk'));
  }

});
