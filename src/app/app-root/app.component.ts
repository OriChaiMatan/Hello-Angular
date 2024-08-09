import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'hello-angular';
  handleCountdownDone() {
    console.log('Countdown is done!');
    // Add additional logic here, e.g., updating UI, alerting the user, etc.
  }
}
