import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccessDeniedComponent } from './shared/access-denied/access-denied.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { RegisterComponent } from './core/component/register/register.component';
import { LoginComponent } from './core/component/login/login.component';

import { Authentication } from './core/authentication/authentication';

//Imporrt API Classes
import { AuthenticationApi } from './core/http/authentication-api';

//Import Service Classes
import { AuthService } from './core/service/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AccessDeniedComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [Authentication,
  AuthenticationApi,
  AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
