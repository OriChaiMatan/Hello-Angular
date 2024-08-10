import { Component } from '@angular/core';
import { Watcher } from '../../models/watcher.model';

@Component({
  selector: 'watcher-app',
  templateUrl: './watcher-app.component.html',
  styleUrls: ['./watcher-app.component.scss']
})
export class WatcherAppComponent {

  watchers: Watcher[] = [
    { id: 'w102', fullname: 'John Doe', movies: ['The Matrix', 'Inception', 'Interstellar', 'The Dark Knight', 'Blade Runner 2049'], img: 'https://api.dicebear.com/9.x/thumbs/svg?seed=Aneka' },
    { id: 'w101', fullname: 'Puki Ba', movies: ['Rambo', 'Rocky', 'Die Hard', 'Predator', 'Mad Max'], img: 'https://api.dicebear.com/9.x/thumbs/svg?seed=Felix' },
    { id: 'w103', fullname: 'Jane Smith', movies: ['Titanic', 'The Godfather', 'Schindler\'s List', 'Forrest Gump', 'Pulp Fiction'], img: 'https://api.dicebear.com/9.x/thumbs/svg?seed=Sam' }
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
