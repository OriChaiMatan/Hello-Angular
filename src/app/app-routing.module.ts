import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AnimalListComponent } from './cmps/animal-list/animal-list.component';
import { CountDownComponent } from './cmps/count-down/count-down.component';
import { SeasonClockComponent } from './cmps/season-clock/season-clock.component';
import { MouseMonitorComponent } from './cmps/mouse-monitor/mouse-monitor.component';
import { HomePageComponent } from './cmps/home-page/home-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'animals-list', component: AnimalListComponent },
  { path: 'season-clock', component: SeasonClockComponent },
  { path: 'count-down', component: CountDownComponent },
  { path: 'mouse-tracker', component: MouseMonitorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
