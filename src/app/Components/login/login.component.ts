import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = "";  
  password: string = "";  
  constructor(private authService: AuthenticationService, private router: Router)
  {
    //Checks to see if we are already logged in
    if(localStorage.getItem("adminuser") !== null)
    {
      this.router.navigate(['cars']);
    }
  }
  login(){
    if(this.username != '' && this.password != '')
    {
      if(this.authService.login(this.username, this.password))
      {
        this.router.navigate(['cars']);
      }
    }
  }
}
