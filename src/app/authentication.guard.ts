import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

//This class is used for authentication on app-routing module CanActivate
export class AuthenticationGuard {
  constructor(private router: Router)
  {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      //Checks if localstorage is empty or not
      if(localStorage.getItem("adminuser"))
      {
        return true;
      }
      this.router.navigate(['']);
      return false;
  }
  
}
