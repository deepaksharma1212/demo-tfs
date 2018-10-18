import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { AuthService } from '../../service/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userModel : User;
  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.userModel = new User();
  }

  onSubmit(): void {
    if (this.valildateRegister()) {
      this.auth
      .register(this.userModel)
      .subscribe(response => {
        if(!response['hasError']){
          window.localStorage.setItem('UserToken',response['userToken']);
        }else{
          //Error Msg
        }
        //SpinnerUtil.hideSpinner();
      },err => {
       // SpinnerUtil.hideSpinner();
        //ToastrUtil.showErrorMessage('Login', 'Unauthorized User',3000);
        console.log(err)
      });
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

}
