import Route from '@ember/routing/route';

export default class HistoryRoute extends Route {
  model() {
    const games = localStorage.getItem('pastGames');
    return games ? JSON.parse(games) : [];
  }
}
