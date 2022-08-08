import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MycounterComponent } from '../mycounter/mycounter.component';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';
import { GameappComponent } from './gameapp/gameapp.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    MycounterComponent,
    OddComponent,
    EvenComponent,
    GameappComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
