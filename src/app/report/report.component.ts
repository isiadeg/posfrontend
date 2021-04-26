import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
datas:any;
datasi:any;
proper:any=[];
  constructor(private route: ActivatedRoute) { }
objectdata: any = {};
dataarray: any =[];
names:any=[];
counting: any = [];
vendo:any=[];
  ngOnInit() {
    this.datasi = this.route.snapshot.data['report'];
    this.datasi.subscribe((d)=>{
      this.datas=d.data;
      console.log(this.datas);
      if(this.datas){

  //this.objectdata['name']= vendo;
this.datas.forEach((vendori)=>{
  console.log(vendori);
let vendor = Object.keys(vendori)[0];
console.log(vendor);
  //vendo[vendor] ={};
let vendora=[];
this.vendo.push(vendora);
vendora.push(vendor);
let daily = vendori[vendor]["dailytransaction"];
let trans = vendori[vendor]["transaction"];

let dailykeys = Object.keys(daily);

let hi ={};
dailykeys.forEach((dailykey)=>{

  let minute;
  let second;
          let  i = parseInt(dailykey);
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
            let datetime = day+"/"+month+"/"+year+" - "+hours+":"+minute+":"+second;
//vendo[vendor]["datetimedaily"] = datetime;


hi["datetimedaily"] = datetime;

let whereobject = vendori[vendor]["dailytransaction"][dailykey];
if(whereobject["bank"]){
let bank = whereobject["bank"];

  //vendo[vendor]
  hi["amountowedinbank"] = bank["amountowedbyvendor"];
//vendo[vendor]
hi["amountremitedinbank"] = bank["amountremited"];
//vendo[vendor]
hi["openingbalanceinbank"] = bank["openingbalance"];
//  vendo[vendor]
  hi['profitbank'] = bank["profit"];}
  if(whereobject["hand"]){
let hand = whereobject["hand"];
hi["amountowedinhand"] = hand["amountowedbyvendor"];
hi["amountremitedinhand"] = hand["amountremited"];
hi["openingbalanceinhand"] = hand["openingbalance"];
hi['profithand'] = hand["profit"];
}

});
vendora.push(hi);
let dati = [];
vendora.push(dati);

if(trans !== null){
  console.log("trans is not null o ")
  let transkeys = Object.keys(trans);
transkeys.forEach((transkey)=>{
  console.log(transkey);
  let minute;
  let second;
          let  i = parseInt(transkey);
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
            let datetim = day+"/"+month+"/"+year+" - "+hours+":"+minute+":"+second;
 this.counting.push[datetim];

let datetime = {};
datetime["datetime"] = datetim
dati.push(datetime);
///vendo[vendor]["datetimetrans"] = dati;
let nexti = vendori[vendor]["transaction"][transkey];
datetime["type"] =  nexti["type"];
let typi = dati["type"];

  //dati[datetime]
  datetime["amountcollectedfromcustomer"] = nexti["amountcollectedfromcustomer"];
datetime["amountremaininginbank"] = nexti["amountremaininginbank"];
  datetime["amountremaininginhand"] = nexti["amountremaininginhand"];
  datetime["amounttransferedtocustomer"] = nexti["amounttransferedtocustomer"];
  datetime["amountgiventocustomer"] = nexti["amountgiventocustomer"];
  datetime["amounttransferedtobank"] = nexti["amounttransferedtobank"];

  datetime["bankcharges"] = nexti["bankcharges"];
datetime["date"] = nexti["date"];
datetime["profit"] = nexti["profit"];




})}


console.log(this.vendo);

  console.log(this.vendo)
this.dataarray.push(this.vendo);  })

}}, (e)=>{
      alert(e);
    }
  )

}
}
