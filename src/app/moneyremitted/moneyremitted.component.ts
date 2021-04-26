import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RemmitedresolveService} from './remmitedresolve.service'

@Component({
  selector: 'app-moneyremitted',
  templateUrl: './moneyremitted.component.html',
  styleUrls: ['./moneyremitted.component.css']
})
export class MoneyremittedComponent implements OnInit {
datas:any;
g:any;
m:any;
uid:any;
  constructor(private route: ActivatedRoute, private remres:RemmitedresolveService) { }

  ngOnInit() {
    this.uid = this.remres.idd;
    console.log(this.uid);

    this.datas = this.route.parent.snapshot.data['remmiteddetails'];
console.log(this.datas)
      this.datas.subscribe((d)=>{
        let e = Object.keys(d);
      this.g = [];
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
          h["stringTime"] = day+"/"+month+"/"+year+" - "+hours+":"+minute+":"+second;


          let q = d[f];

          let p = Object.keys(q);

          p.forEach((r)=>{

              h["where"] = r;
            h["money"] = q[r].amount;

          })


          this.g.push(h);

          console.log(this.g);

        })
        this.g.reverse();
      });


  }
  edit(hi, hig):void{

    console.log(hi + " "+ hig);
  }
Dati(gs){
  return new Date(gs);
}
}
