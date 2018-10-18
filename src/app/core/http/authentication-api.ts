import { Injectable } from "@angular/core";
import {HttpHeaders, HttpClient} from '@angular/common/http';
import { Observable } from "rxjs/Rx";
import { API_URL} from '../../app.component';
import { API_TOKEN } from '../../app.component';
import { APP_CODE } from '../../app.component';
import { User } from '../model/user';

@Injectable()
export class AuthenticationApi {

    private headers: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json','apitoken': API_TOKEN});

    constructor(private http: HttpClient) { }

    private static handleError(error: any) {
        const errorMessage = (error.message) ? error.message :
          error.status ? `${error.status} - ${error.statusText}` : `Server error`;
        console.log(errorMessage);
        return Observable.throw(errorMessage);
      }

    processLogin(param : User) : Observable<any>{
        const url = `${API_URL}/api/account/login`;
        return  this.post(param,url);
    }

    processLogout() : void{
        const url = `${API_URL}/api/account/logout`;
        this.get(url).subscribe();
    }

    register(user : User) : Observable<any>{
        const url = `${API_URL}/api/account/register-user`;
       return this.post(user,url);
    }

    post(param : User,url : string) : Observable<any> {
        param.code = APP_CODE;
        return this.http.post(url, param, {headers: this.headers})
        .catch(AuthenticationApi.handleError);
    }

     get(url: any): Observable<any> {
        return this.http.get(url, { headers: this.headers})
            .catch(AuthenticationApi.handleError);
    }

}
