import { Injectable } from '@angular/core';
import{Resolve, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LoginService} from '../login.service';

@Injectable({
  providedIn: 'root'
})
export class DepositService  implements Resolve<any>{
  idd:any;

  constructor(private routi:ActivatedRoute, private http: HttpClient,
  private loginservice: LoginService) { }
  uid:any;
  banks:any;
  mychargeObj: any;
  resolve (route:ActivatedRouteSnapshot, state: RouterStateSnapshot){
let uid = route.paramMap.get("id")
this.idd = uid;
this.loginservice.user.getIdToken(/* forceRefresh */ true).then((idToken)=>{
 this.http.post<any>('http://localhost:3030/api/banks', {id: idToken,
    ref:`financial institution/`/*/${Date.now();}`*/}
  ).subscribe((data)=>{
    this.banks = Object.keys(data.banks);
    console.log(this.banks);
    this.mychargeObj =  data.mycharge;
  });
  });


  return this.loginservice.user.getIdToken(/* forceRefresh */ true).then((idToken)=>{
    return this.http.post('http://localhost:3030/api/banks', {id: idToken,
      ref:`financial institution/`/*/${Date.now();}`*/}
    );
    });




  }
}
