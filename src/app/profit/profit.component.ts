import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, } from '@angular/router';

@Component({
  selector: 'app-profit',
  templateUrl: './profit.component.html',
  styleUrls: ['./profit.component.css']
})
export class ProfitComponent implements OnInit {

  constructor(private route:ActivatedRoute, private router: Router) { }
datas:any;
dataarray: any[];
datearray:any[];
  ngOnInit() {
    this.datas = this.route.snapshot.data['profit'];
    this.datas.subscribe((dataobject)=>{
      console.log(dataobject);
      let days = Object.keys(dataobject);
      this.dataarray = [];
      this.datearray =[];
      days.forEach((day)=>{
        console.log(day);
        this.datearray.push(day);
        this.dataarray.push(dataobject[day]);
        console.log(dataobject[day]);


      });
      this.dataarray.reverse();
      this.datearray.reverse();

    })
  }

}
