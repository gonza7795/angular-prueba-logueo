import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { PrivateComponent } from './components/private/private.component';


// Modules
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    LoginComponent,
    HomeComponent,
    PrivateComponent,
    HttpClientModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
