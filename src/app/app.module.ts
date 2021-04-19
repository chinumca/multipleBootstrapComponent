import { BrowserModule } from '@angular/platform-browser';
import { ApplicationRef, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BppComponent} from './bpp/bpp.component';
@NgModule({
  declarations: [
    AppComponent,
    BppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents:[BppComponent,AppComponent]
  // bootstrap: [AppComponent]
})
export class AppModule { 
  constructor() {}
  ngDoBootstrap(appRef: ApplicationRef) {
    if (Math.random() > 0.5) {
        appRef.bootstrap(BppComponent, '#app');
    } else {
        appRef.bootstrap(AppComponent, '#app');
    }
  }
}
