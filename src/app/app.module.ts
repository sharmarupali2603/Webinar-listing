import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebinarComponent } from './Component/webinar/webinar.component';
import { WebinarCardComponent } from './Component/webinar-card/webinar-card.component';
import { WebinarListComponent } from './Component/webinar-list/webinar-list.component';

@NgModule({
  declarations: [
    AppComponent,
    WebinarComponent,
    WebinarCardComponent,
    WebinarListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
