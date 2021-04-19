import { BrowserModule } from '@angular/platform-browser';
import { ApplicationRef, ComponentFactoryResolver, DoBootstrap, Inject, NgModule, Type } from '@angular/core';

import { AppComponent } from './app.component';
import { BppComponent } from './bpp/bpp.component';
import { DOCUMENT } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    BppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents:[AppComponent,BppComponent]
  // bootstrap: [AppComponent]
})
export class AppModule implements DoBootstrap {
  static bootstrapComponents: Type<{}>[] = [AppComponent, BppComponent];

  constructor(
      @Inject(DOCUMENT) private _document: any,
      private _componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngDoBootstrap(applicationRef: ApplicationRef) {
      for (const component of AppModule.bootstrapComponents) {
          const { selector } = this._componentFactoryResolver.resolveComponentFactory(component);

          if (this._document.querySelector(selector)) {
              applicationRef.bootstrap(component);
          }
      }
  }
}
