import { Component, OnInit, OnDestroy } from '@angular/core';
import { Mouse } from '../../models/mouse.model';

@Component({
  selector: 'mouse-monitor',
  templateUrl: './mouse-monitor.component.html',
  styleUrl: './mouse-monitor.component.scss'
})
export class MouseMonitorComponent implements OnInit, OnDestroy {
  pos: Mouse = {
    x: 0,
    y: 0,
    isOn: true
  };

  private updatePos = (event: MouseEvent) => {
    if (this.pos.isOn) {
      this.pos = { x: event.clientX, y: event.clientY, isOn: this.pos.isOn };
    }
  };

  ngOnInit() {
    this.addMouseListener();
  }

  ngOnDestroy() {
    this.removeMouseListener();
  }

  addMouseListener() {
    document.addEventListener('mousemove', this.updatePos);
  }

  removeMouseListener() {
    document.removeEventListener('mousemove', this.updatePos);
  }

  toggleTracking() {
    this.pos.isOn = !this.pos.isOn;
    if (this.pos.isOn) {
      this.addMouseListener();
    } else {
      this.removeMouseListener();
    }
  }
}
