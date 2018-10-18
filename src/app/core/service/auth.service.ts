import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { User } from '../model/user';
import { Authentication } from '../authentication/authentication';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private authentication : Authentication) { }

  private static handleError(error: any) {
    const errorMessage = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : `Server error`;
    console.log(errorMessage);
    return Observable.throw(errorMessage);
  }

  login(user: User): Observable<any> {
   
     return this.authentication.doLogin(user)
      .map(response =>  {
        if (!response.hasError) {
          alert('Login Successful');
          //this.router.navigate(['verify-token']);
          //ToastrUtil.showSuccesMessage('','We have sent an auth code to your phone or email',5000);
         // localStorage.setItem('isCheckToken','true');
          return true;
        } else if(response.hasError){
          alert(response.errors[0]['errorMessage']);
         // localStorage.setItem('loggedInUser',JSON.stringify(data));
         // localStorage.setItem('isLoggedIn','true');
         // ToastrUtil.showSuccesMessage('','Login Successful',5000);
          //this.router.navigate(['/app']);
        }else {
         // ToastrUtil.showErrorMessage('',data.message,5000);
          return false;
        }
      })
      .catch(AuthService.handleError);
  }

  register(user : User) : Observable<any>{

    return this.authentication.doRegister(user)
    .map(response =>  {
      if (!response.hasError) {
        alert(response.dataSource);
        //this.router.navigate(['verify-token']);
        //ToastrUtil.showSuccesMessage('','We have sent an auth code to your phone or email',5000);
       // localStorage.setItem('isCheckToken','true');
        return true;
      } else if(response.hasError){
        alert(response.errors[0]['errorMessage']);
       // localStorage.setItem('loggedInUser',JSON.stringify(data));
       // localStorage.setItem('isLoggedIn','true');
       // ToastrUtil.showSuccesMessage('','Login Successful',5000);
        //this.router.navigate(['/app']);
      }else {
       // ToastrUtil.showErrorMessage('',data.message,5000);
        return false;
      }
    })
    .catch(AuthService.handleError);
  }
}
