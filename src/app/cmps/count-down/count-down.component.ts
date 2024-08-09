import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Count } from '../../models/count.model';


@Component({
  selector: 'count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.scss']
})

export class CountDownComponent implements OnInit {
  @Input() startFrom: number = 10;  // Default value is 10
  @Output() onDone: EventEmitter<void> = new EventEmitter<void>();

  counter: Count = {
    count: 0
  };


  ngOnInit(): void {
    this.counter = { count: this.startFrom };  // Initialize counter as an object
    this.startCountdown();
  }

  startCountdown() {
    const interval = setInterval(() => {
      if (this.counter.count > 0) {
        this.counter.count--;  // Decrement the count property
      } else {
        clearInterval(interval);
        this.onDone.emit();  // Emit event when countdown is complete
      }
    }, 1000);  // Adjust the interval as needed (1000ms = 1s)
  }
}