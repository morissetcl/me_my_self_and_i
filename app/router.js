import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('email', { path: '/contact' });
  this.route('about');
  this.route('articles');
  this.route('gemstorys', { path: '/gems' });
  this.route('home');
});

export default Router;
