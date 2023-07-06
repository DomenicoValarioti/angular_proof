import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import {AppRoutingModule} from './app.routing.module'
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    //, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
