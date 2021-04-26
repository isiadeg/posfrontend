import { Injectable } from '@angular/core';
import{Resolve, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LoginService} from '../login.service';

@Injectable({
  providedIn: 'root'
})
export class AllocatedService  implements Resolve<any>{
  idd:any;

  constructor(private routi:ActivatedRoute, private http: HttpClient,
  private loginservice: LoginService) { }
  uid:any;
  resolve (route:ActivatedRouteSnapshot, state: RouterStateSnapshot){
let uid = route.paramMap.get("id")
this.idd = uid;

  return this.loginservice.user.getIdToken(/* forceRefresh */ true).then((idToken)=>{
      return  this.http.post('http://localhost:3030/api/read', {id: idToken,
      ref:`allocatemoneyy/${uid}`/*/${Date.now();}`*/}, {
        headers: new HttpHeaders({
          "Content-Type" : "application/json"
        })
      })
    });




  }
}
