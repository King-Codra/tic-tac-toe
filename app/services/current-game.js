import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class WinnerTrackerService extends Service {
  @tracked winner = null;
}
