/// <reference path="../../node_modules/cordova-plugin-mfp/typings/worklight.d.ts" />
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

import { app_routing } from './app.routes';
import { LoginComponent } from './components/login/login.component';
import { TddComponent } from './components/tdd/menuTDD/tdd.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    TddComponent
  ],
  imports: [
    BrowserModule,
    app_routing,
    HttpModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
