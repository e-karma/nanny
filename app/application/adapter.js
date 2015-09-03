import ActiveModelAdapter from 'active-model-adapter';
import config from '../config/environment';

export default ActiveModelAdapter.extend({
  // change to api host
  host: config.appApiHost,
  namespace: 'api',

  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Expose-Headers': 'ETag',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS, HEAD',
    'Access-Control-Allow-Headers': 'x-requested-with, Content-Type, origin, authorization, accept, client-security-token'
  }
});
