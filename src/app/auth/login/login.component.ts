import { Component } from '@angular/core';
import { LoginService } from '../../service/auth/login.service';
import { UserLogin } from './UserLogin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  constructor(private loginService: LoginService) {}

  userlogin: UserLogin = new UserLogin();
  login(): void {
    this.loginService.login(this.userlogin).subscribe((data: any) => {
      console.log(data);
    });
  }
}
