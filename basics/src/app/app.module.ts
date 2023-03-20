import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// we need the FormsModule to work with ngModel and Forms
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppTopBarComponent } from './app-top-bar/app-top-bar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AppTopBarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
