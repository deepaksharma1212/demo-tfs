import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userModel : User;
  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.userModel = new User();
  }

  onSubmit(): void {
    debugger;
    if (this.valildateLogin()) {
      this.auth
      .login(this.userModel).subscribe();
    }else{
      //SpinnerUtil.hideSpinner();
    }
  }

  valildateRegister(): Boolean {
    let isValid:Boolean = true;
    if (!this.userModel.email || !this.userModel.password || !this.userModel.confirmPassword || !this.userModel.phoneNumber) {
        isValid = false;
    }
    return isValid;
  }

  valildateLogin(): Boolean {
    let isValid:Boolean = true;
    if (!this.userModel.email || !this.userModel.password) {
        isValid = false;
    }
    return isValid;
  }


}
