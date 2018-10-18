import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthenticationApi } from '../http/authentication-api';
import { User } from '../model/user';

@Injectable()
export class Authentication {

    constructor(private authenticationApi: AuthenticationApi) { }

    doLogin(param: User): Observable<any> {
        return this.authenticationApi.processLogin(param);
    }

    doLogout(): void {
        this.authenticationApi.processLogout();
        //AppUtil.clearLocalStorageAfterLogout();
    }

    doRegister(param : User) : Observable<any>{

        return this.authenticationApi.register(param);
    }
}
