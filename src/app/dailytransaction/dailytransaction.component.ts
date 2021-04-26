import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute  } from "@angular/router";

@Component({
  selector: 'app-dailytransaction',
  templateUrl: './dailytransaction.component.html',
  styleUrls: ['./dailytransaction.component.css']
})
export class DailytransactionComponent implements OnInit {
datas:any;
g:any;
levels1:any;
levels2: any;
tables:any=[];
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.datas = this.route.snapshot.data['daily'];
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

        obj["where"] = Object.keys(q)[0];
        let ind = Object.keys(q)[0];

        let remaining = q[ind];
          if(ind == "bank"){
              obj["date"]= key;
  obj["time"] = o;
            //vendo[vendor]
            obj["amountowedinbank"] =  remaining["amountowedbyvendor"];
          //vendo[vendor]
          obj["amountremitedinbank"] =  remaining["amountremited"];
          //vendo[vendor]
          obj["openingbalanceinbank"] =  remaining["openingbalance"];
          //  vendo[vendor]
          obj['profitbank'] =  remaining["profit"];}
            if(ind == "hand"){
              obj["date"]= key;
              obj["time"] = o;
          obj["amountowedinhand"] =  remaining["amountowedbyvendor"];
          obj["amountremitedinhand"] =  remaining["amountremited"];
          obj["openingbalanceinhand"] =  remaining["openingbalance"];
          obj['profithand'] =  remaining["profit"];
          }









      })
  } ); console.log(this.levels1); console.log(this.tables); this.levels1.reverse(); },
    (e)=>{
if(e){
  alert (e.error);
}
    })
  }


}
