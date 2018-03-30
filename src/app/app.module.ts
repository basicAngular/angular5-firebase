import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';

import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';

import { AppComponent } from './app.component';

import {environment} from '../environments/environment';
import { AuthService } from './auth.service';

import {AngularFireAuthModule} from "angularfire2/auth/auth.module";
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.config), //Initialize firebase
    AngularFireDatabaseModule, // for database
    AngularFireAuthModule,

  ],
  providers: [AuthService],
  bootstrap: [LoginComponent]
})
export class AppModule { }