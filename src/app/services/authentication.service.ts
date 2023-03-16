import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }


  //Simple login system
  login(username: string, password: string): boolean
  {
    if(username == "admin" && password == "admin")
    {
      localStorage.setItem("adminuser", "loggedinAdmin");
      return true;
    }
    return false;
  }
  logout()
  {
    localStorage.removeItem("adminuser");
  }

}
