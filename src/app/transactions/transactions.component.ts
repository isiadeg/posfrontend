import { Component, OnInit } from '@angular/core';
import{Resolve, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LoginService} from '../login.service';
import {DepositService} from '../deposit/deposit.service';

@Component({
  selector: 'app-dailytransaction',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
datas:any;
g:any;
levels1:any;
levels2: any;
tables:any=[];
uid:any;
  constructor(private route: ActivatedRoute, private router:Router, private http:HttpClient,
  private loginservice: LoginService,
private deposit:DepositService) { }

  ngOnInit() {

    if(this.deposit.idd){
      this.uid = this.deposit.idd }else{ this.uid = this.route.snapshot.paramMap.get("id");}
    this.datas = this.route.snapshot.data['transactions'];
    this.datas.subscribe((y)=>{
      console.log(y);
this.g = [];
this.levels1 = [];
let z=Object.keys(y);
z.forEach((key)=>{
  this.tables.push(key);
  let d = y[key]
  let keyi=[];
  this.levels1.push(keyi);


      let e = Object.keys(d);

      e.forEach((f)=>{

let minute;
let second;
      let  i = parseInt(f);
        let h={};
h["time"] = f;
        let j = new Date(i);
        let year = j.getFullYear();
        let month = j.getMonth()+1;
        let day = j.getDate();

          if (j.getMinutes() < 10){
          minute = "0"+j.getMinutes();
        }else{minute = j.getMinutes();}


          if (j.getSeconds() < 10){
            second = "0"+j.getSeconds();
          }else{
            second = j.getSeconds();
          }

        let hours = j.getHours();
        let o = hours+":"+minute+":"+second;

 let oi=[];
keyi.push(oi);
let obj ={};
oi.push(obj);
        let q = d[f];

      //  obj["where"] = Object.keys(q)[0];
      //  let ind = Object.keys(q)[0];

        let remaining = q;

              obj["date"]= key;
  obj["time"] = o;
obj["type"] =  remaining["type"];
    //dati[datetime]
    obj["amountcollectedfromcustomer"] = remaining["amountcollectedfromcustomer"];
  obj["amountremaininginbank"] = remaining["amountremaininginbank"];
    obj["amountremaininginhand"] = remaining["amountremaininginhand"];
    obj["amounttransferedtocustomer"] = remaining["amounttransferedtocustomer"];
    obj["bankcharges"] = remaining["bankcharges"];
  obj["date"] = remaining["date"];
  obj["timestamp"] = remaining ["time"];
  obj["profit"] = remaining["profit"];
obj["amountgiventocustomer"] = remaining["amountgiventocustomer"];
  obj["amounttransferedtobank"] = remaining["amounttransferedtobank"];












            //vendo[vendor]
            obj["amountowedinbank"] =  remaining["amountowedbyvendor"];
          //vendo[vendor]
          obj["amountremitedinbank"] =  remaining["amountremited"];
          //vendo[vendor]
          obj["openingbalanceinbank"] =  remaining["openingbalance"];
          //  vendo[vendor]
          obj['profitbank'] =  remaining["profit"];


keyi.reverse();
oi.reverse();






      })
  } ); console.log(this.levels1); console.log(this.tables); this.levels1.reverse(); },
    (e)=>{
if(e){
  alert (e.error);
}
    })
  }
edit(date, timestamp, type){
  if(type == "withdraw"){
  this.router.navigate(['/user', this.uid, 'editwithdrawal', date, timestamp])}else{
    this.router.navigate(['/user', this.uid, 'editdeposit', date, timestamp])
  }
}

}
