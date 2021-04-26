import { Injectable } from '@angular/core';
import{Resolve, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LoginService} from './login.service';
import {DepositService} from './deposit/deposit.service';

@Injectable({
  providedIn: 'root'
})
export class ProfitService implements Resolve<any>{

  constructor(private routi:ActivatedRoute, private http: HttpClient,
  private loginservice: LoginService,
private deposit:DepositService) { }

  resolve (route:ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>{
    let date = Date.now();

     let j = new Date(date);
     let year = j.getFullYear();
     let month = j.getMonth()+1;
     let day = j.getDate();

     let dategan = year+"-"+month+"-"+day;
return this.loginservice.user.getIdToken(/* forceRefresh */ true).then((idToken)=>{
      return this.http.post<any>('http://localhost:3030/api/read', {id: idToken,
         ref:`totaldailyprofit`}, {
      headers: new HttpHeaders({
        "Content-Type" : "application/json"
      })
    })
  });
  }
}
