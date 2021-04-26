import { Injectable } from '@angular/core';
import{Resolve, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LoginService} from './login.service';
import {DepositService} from './deposit/deposit.service';

@Injectable({
  providedIn: 'root'
})
export class ReportService implements Resolve<any>{

  constructor(private routi:ActivatedRoute, private http: HttpClient,
  private loginservice: LoginService,
private deposit:DepositService) { }

  resolve (route:ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>{
  //let uid = this.deposit.idd || this.route.paramMap.get("id");
return this.loginservice.user.getIdToken(/* forceRefresh */ true).then((idToken)=>{
      return this.http.post<any>('http://localhost:3030/api/gettransaction', {id: idToken}, {
      headers: new HttpHeaders({
        "Content-Type" : "application/json"
      })
    })
  });
  }
}
