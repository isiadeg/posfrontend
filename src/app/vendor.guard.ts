import { Injectable } from '@angular/core';
import {Router, CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {LoginService} from './login.service';

@Injectable({
  providedIn: 'root'
})
export class VendorGuard implements CanActivate, CanActivateChild {
  constructor(private router: Router, private loginservice: LoginService){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  console.log("hi from guards");
  this.loginservice.redirecturl = state.url;
console.log(this.isloggedin());
      if(this.isloggedin() == "true"){

    return true;
  }else{
this.router.navigate(['/login']);
    return false;

  }
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log("hi from guards");
      this.loginservice.redirecturl = state.url;
    console.log(this.isloggedin());
          if(this.isloggedin() == "true"){

        return true;
      }else{
    this.router.navigate(['/login']);
        return false;

      }
  }
  isloggedin(){
    if(this.loginservice.user){
      return "true";
    }else{

      return "false";


    }
  }

}
