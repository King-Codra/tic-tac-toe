import Route from '@ember/routing/route';

export default class PastGamesRoute extends Route {
  model() {
    return JSON.parse(localStorage.getItem('pastGames')) || [];
  }
}
