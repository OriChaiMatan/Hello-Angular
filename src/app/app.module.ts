import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-root/app.component';
import { AnimalListComponent } from './cmps/animal-list/animal-list.component';
import { SeasonClockComponent } from './cmps/season-clock/season-clock.component';
import { CountDownComponent } from './cmps/count-down/count-down.component';
import { CommonModule } from '@angular/common';
import { MouseMonitorComponent } from './cmps/mouse-monitor/mouse-monitor.component';
import { AppHeaderComponent } from './cmps/app-header/app-header.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimalListComponent,
    SeasonClockComponent,
    CountDownComponent,
    MouseMonitorComponent,
    AppHeaderComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
