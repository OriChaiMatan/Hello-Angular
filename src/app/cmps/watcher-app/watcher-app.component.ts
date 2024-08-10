import { Component } from '@angular/core';
import { Watcher } from '../../models/watcher.model';

@Component({
  selector: 'watcher-app',
  templateUrl: './watcher-app.component.html',
  styleUrls: ['./watcher-app.component.scss']
})
export class WatcherAppComponent {

  watchers: Watcher[] = [
    { id: 'w101', fullname: 'Puki Ba', movies: ['Rambo', 'Rocky', 'Die Hard', 'Predator', 'Mad Max'] },
    { id: 'w102', fullname: 'John Doe', movies: ['The Matrix', 'Inception', 'Interstellar', 'The Dark Knight', 'Blade Runner 2049'] },
    { id: 'w103', fullname: 'Jane Smith', movies: ['Titanic', 'The Godfather', 'Schindler\'s List', 'Forrest Gump', 'Pulp Fiction'] }
  ]

  selectedWatcher: Watcher | null = null;

  selectWatcher(watcher: Watcher) {
    this.selectedWatcher = watcher;
  }

  closeModal() {
    this.selectedWatcher = null;
  }

  deleteWatcher(watcher: Watcher) {
    this.watchers = this.watchers.filter(w => w.id !== watcher.id);
  }
}
