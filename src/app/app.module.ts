import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HammerDirective } from './hammer.directive';

@NgModule({
  declarations: [
    AppComponent,
    HammerDirective
  ],
  imports: [
    HammerModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
