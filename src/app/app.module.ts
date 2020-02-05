import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { TimeAgoPipe } from 'time-ago-pipe';

// components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

// routing
import { rootRouterConfig } from './app.routing';
import { LandingPageComponent } from './landing-page/landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TimeAgoPipe,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(rootRouterConfig, { scrollPositionRestoration: 'enabled', useHash: false }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

