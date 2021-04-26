import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from "@angular/router";
import {Status} from './status';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/database";


@Injectable({
  providedIn: 'root'
})
export class LoginService {
signinerrormessage: any;
redirecturl: any;
user:any=false;
admin:any=false;
toUseIdToken: any;
  constructor(private http: HttpClient, private router: Router) {
    firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        this.user = user;
        if(this.user /*&& this.user.emailVerified*/){
          this.user.getIdToken(/* forceRefresh */ true).then((idToken)=>{
          // Send token to your backend via HTTPS
          // ...
          console.log(idToken);
        this.http.post<Status>('http://localhost:3030/api/setclaims', {id: idToken}, {
        headers: new HttpHeaders({
          "Content-Type" : "application/json"
        })
        }).pipe(map(data=><Status>{status:data.status})).subscribe((data)=>{
          console.log(data.status);

        if(data.status == "success"){console.log("admin");}
          this.user.getIdTokenResult(true).then((id)=>{

        if (!!id.claims.admin) {
          if(!this.redirecturl){this.redirecturl = "/admin"}
          this.router.navigate([`${this.redirecturl}`]);
          this.admin = id.claims.admin
        }else{
          if(!this.redirecturl){this.redirecturl = `/user/${this.user.uid}`}
          this.router.navigate([`${this.redirecturl}`]);
          this.vendor = true;
        }
        this.user.getIdToken(/* forceRefresh */ true).then((idTokn)=>{
          this.toUseIdToken = idTokn;
        }).catch((e)=>{
          console.log(e);
        })
          });
          console.log(this.user);


        });

          }).catch(function(error) {
          // Handle error
          });

        }
      /*  if(!user.emailVerified){
        let uid = user.uid;
        console.log(uid);
        user.sendEmailVerification().then(function() {
    // Email sent.
     this.signinerrormessage = "Please verify your email first, we have sent a verification";
    }).catch(function(error) {
    // An error happened.
    console.log(error);
    });

  } */



      }
      else{
        this.user=false;
      }
    });
  }
vendor:boolean = false;
  login(hi):void{
    console.log("in login service");
    firebase.auth().signInWithEmailAndPassword(hi.email, hi.password).then(()=>{
/* if(this.user && !this.user.emailVerified){

  let uid = this.user.uid;
  console.log(uid);
  this.user.sendEmailVerification().then((jj)=> {
// Email sent.

this.signinerrormessage = "Please verify your email first, we have sent a verification";
alert(this.signinerrormessage);

}).catch(function(error) {
// An error happened.
});
}*/
if(this.user /*&& this.user.emailVerified*/){
  this.user.getIdToken(/* forceRefresh */ true).then((idToken)=>{
  // Send token to your backend via HTTPS
  // ...
  console.log(idToken);
this.http.post<Status>('http://localhost:3030/api/setclaims', {id: idToken}, {
headers: new HttpHeaders({
  "Content-Type" : "application/json"
})
}).pipe(map(data=><Status>{status:data.status})).subscribe((data)=>{
  console.log(data.status);

if(data.status == "success"){console.log("admin");}
  this.user.getIdTokenResult(true).then((id)=>{

if (!!id.claims.admin) {
  if(!this.redirecturl){this.redirecturl = "/admin"}
  this.router.navigate([`${this.redirecturl}`]);
  this.admin = id.claims.admin
}else{
  if(!this.redirecturl){this.redirecturl = `/user/${this.user.uid}`}
  this.router.navigate([`${this.redirecturl}`]);
  this.vendor = true;
}
this.user.getIdToken(/* forceRefresh */ true).then((idTokn)=>{
  this.toUseIdToken = idTokn;
}).catch((e)=>{
  console.log(e);
})
  });
  console.log(this.user);


});

  }).catch(function(error) {
  // Handle error
  });

}
}

    ).catch((error)=>{
      switch(error.code){
        case "auth/invalid-email":
        this.signinerrormessage = "the email entered is not valid";
        break;
        case "auth/user-not-found":
        this.signinerrormessage ="there is no user corresponding to the given email.";
        break;
        case "auth/wrong-password":
        this.signinerrormessage ="The password is invalid for the given email";
        break;
        default:
        this.signinerrormessage = "An error ocurred";
        break;
      }
      alert(this.signinerrormessage);
    });

  }




}
