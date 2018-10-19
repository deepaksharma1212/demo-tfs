import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { AuthService } from '../../service/auth.service';

import { Router } from '@angular/router';

import { ToastrUtil } from '../../util/toastr-util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userModel : User;
  constructor(private auth: AuthService, private router : Router) { }

  ngOnInit() {
    this.userModel = new User();
  }

  onSubmit(): void {
    if (this.valildateLogin()) {
      this.auth
      .login(this.userModel).subscribe();
    }else{
      ToastrUtil.showErrorMessage('','Username or Password should not be empty',3000);
    }
  }

  valildateLogin(): Boolean {
    let isValid:Boolean = true;
    if (!this.userModel.email || !this.userModel.password) {
        isValid = false;
    }
    return isValid;
  }

  gotoRegister() : void{
    this.router.navigate(['/register']);
  }


}
