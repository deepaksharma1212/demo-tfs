import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ToastrModule, ToastNoAnimation, ToastNoAnimationModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgxSpinnerService } from 'ngx-spinner';

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

//Import Util Classes
import { AppUtil } from '../app/core/util/app-util';
import { SpinnerUtil } from '../app/core/util/spinner-util';
import { ToastrUtil } from '../app/core/util/toastr-util';

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
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ToastNoAnimationModule,
    ToastrModule.forRoot({ toastComponent: ToastNoAnimation }),
    NgxSpinnerModule,
  ],
  providers: [Authentication,
  AuthenticationApi,
  AuthService,
  NgxSpinnerService,
  AppUtil,SpinnerUtil,ToastrUtil
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
