import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrl: './app-header.component.scss'
})
export class AppHeaderComponent {
  components = [
    { name: 'Animals-List', route: '/animals-list' },
    { name: 'Season-Clock', route: '/season-clock' },
    { name: 'CountDown', route: '/count-down' },
    { name: 'Mouse-Tracker', route: '/mouse-tracker' },
    { name: 'Watchers-App', route: '/watcher-app' },
  ];

  constructor(private router: Router) {}

  navigateHome() {
    this.router.navigate(['/']);
  }
}
