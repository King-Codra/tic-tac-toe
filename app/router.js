import EmberRouter from '@ember/routing/router';
import config from 'tic-tac-toe/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

// Before you deleted all past-games components, routes & templates... Next time just do this.route('history', {path: '/:past-games'});
Router.map(function () {
  this.route('play');
  this.route('history');
});
