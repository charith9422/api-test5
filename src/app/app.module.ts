import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppComponent } from './app.component';
import { InitialService } from './services/initial.service';
import { PlanetsComponent } from './planets/planets.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './services/http.service';


@NgModule({
  declarations: [
    AppComponent,
    PlanetsComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    HttpService,
    InitialService,
    {
      provide: APP_INITIALIZER,
      useFactory: ConfigLoader,
      deps: [InitialService],
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function ConfigLoader(configService: InitialService) {
  return () => configService.load('../assets/app-config.json');
}
