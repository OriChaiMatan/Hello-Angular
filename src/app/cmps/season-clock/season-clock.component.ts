import { Component, OnInit, OnDestroy } from '@angular/core';
import { Season } from '../../models/season.model';

@Component({
  selector: 'season-clock',
  templateUrl: './season-clock.component.html',
  styleUrls: ['./season-clock.component.scss']
})
export class SeasonClockComponent implements OnInit, OnDestroy {

  season: Season;
  private intervalId: any;

  constructor() {
    this.season = {
      isDark: false,
      date: new Date(),
      season: this.getCurrentSeason(),
      img: this.getSeasonImage()
    };
  }

  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      this.season.date = new Date();
    }, 1000); // Update every second
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  getCurrentSeason(): string {
    const now = new Date();
    const month = now.getMonth(); // 0-based index: January is 0, December is 11

    if ((month >= 2 && month <= 4) || (month === 1 && now.getDate() >= 20)) { // Spring: March 20 - June 20
      return 'Spring';
    } else if ((month >= 5 && month <= 7) || (month === 8 && now.getDate() < 23)) { // Summer: June 21 - September 22
      return 'Summer';
    } else if ((month >= 8 && month <= 10) || (month === 11 && now.getDate() < 22)) { // Fall: September 23 - December 21
      return 'Fall';
    } else { // Winter: December 22 - March 19
      return 'Winter';
    }
  }

  getSeasonImage(): string {
    const season = this.getCurrentSeason()
    switch (season) {
      case 'Spring':
        return 'assets/imgs/spring.jpg'
      case 'Summer':
        return 'assets/imgs/summer.jpg';
      case 'Fall':
        return 'assets/imgs/autumn.jpg';
      case 'Winter':
        return 'assets/imgs/winter.jpg';
      default:
        return ''; // Fallback image or empty string
    }
  }

  toggleBackground(): void {
    this.season.isDark = !this.season.isDark;
  }
}
