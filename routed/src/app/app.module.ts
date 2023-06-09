import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyFormComponent } from './my-form/my-form.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PersonComponent } from './person/person.component';
import { DetailsComponent } from './details/details.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { A1Component } from './about/a1/a1.component';
import { A2Component } from './about/a2/a2.component';
import { A3Component } from './about/a3/a3.component';
import { ValComponent } from './val/val.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    MyFormComponent,
    HomeComponent,
    AboutComponent,
    PersonComponent,
    DetailsComponent,
    NotfoundComponent,
    A1Component,
    A2Component,
    A3Component,
    ValComponent,
    ProfileEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
