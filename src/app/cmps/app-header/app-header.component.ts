import { Component } from '@angular/core';

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
  ];
}
