import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from '../model/user';
import { Authentication } from '../authentication/authentication';
import { ToastrUtil} from '../util/toastr-util';
import { SpinnerUtil } from '../util/spinner-util';

import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private authentication : Authentication, private router: Router) { }

  private static handleError(error: any) {
    const errorMessage = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : `Server error`;
    console.log(errorMessage);
    return Observable.throw(errorMessage);
  }

  login(user: User): Observable<any> {
    SpinnerUtil.showSpinner();
     return this.authentication.doLogin(user)
      .map(response =>  {
        if (!response.hasError) {
          SpinnerUtil.hideSpinner();
          ToastrUtil.showSuccesMessage('',response.dataSource,3000);
          localStorage.setItem('UserToken',response.userToken);
          this.router.navigate(['/app']);
          return true;
        } else if(response.hasError){
          SpinnerUtil.hideSpinner();
          ToastrUtil.showErrorMessage('',response.errors[0]['errorMessage'],3000);
        }
      })
      .catch(AuthService.handleError);
  }

  register(user : User) : Observable<any>{
    SpinnerUtil.showSpinner();
    return this.authentication.doRegister(user)
    .map(response =>  {
      if (!response.hasError) {
        SpinnerUtil.hideSpinner();
        ToastrUtil.showSuccesMessage('',response.dataSource,3000);
        this.router.navigate(['login']);
        return true;
      } else if(response.hasError){
        SpinnerUtil.hideSpinner();
        ToastrUtil.showErrorMessage('',response.errors[0]['errorMessage'],3000);
      }
    })
    .catch(AuthService.handleError);
  }
}
