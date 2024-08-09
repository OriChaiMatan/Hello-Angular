import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-root/app.component';
import { AnimalListComponent } from './cmps/animal-list/animal-list.component';
import { SeasonClockComponent } from './cmps/season-clock/season-clock.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimalListComponent,
    SeasonClockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
