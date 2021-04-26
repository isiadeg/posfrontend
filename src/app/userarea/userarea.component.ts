import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/database";

@Component({
  selector: 'app-userarea',
  templateUrl: './userarea.component.html',
  styleUrls: ['./userarea.component.css']
})
export class UserareaComponent implements OnInit {
uid:any;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.uid = this.route.snapshot.paramMap.get("id");
  }

  logout(){
    firebase.auth().signOut().then(()=>{this.router.navigate(['/login'])}).catch((error)=>{alert(error);});

  }

}
