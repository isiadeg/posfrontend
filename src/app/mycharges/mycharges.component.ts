import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {FormGroup, FormBuilder, FormControl, Validators, ValidatorFn, AbstractControl} from '@angular/forms';
import {debounceTime} from 'rxjs/operators';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {LoginService} from '../login.service';
import {Observable, of, throwError} from 'rxjs';
import {map, catchError} from 'rxjs/operators';
import {Message} from '../message';
import {Error} from '../error';




@Component({
  selector: 'app-deposit',
  templateUrl: './mycharges.component.html',
  styleUrls: ['./mycharges.component.css']
})
export class MychargesComponent implements OnInit {
  remitform: FormGroup;
  errormessage:any={};
  loginerror: any;

  private error ={
    required: "This field is required",
      email: "Please enter correct email",
      minlength: "Your password must be at least six characters",
      passwordmatch: "Your password did not match"
  }
uid: any;
datasi:any;
banks:any;
charges: AbstractControl;
minimumbound: AbstractControl;
maxbound: AbstractControl;
percentcharges: AbstractControl;
percentminimumbound: AbstractControl;
percentmaxbound: AbstractControl;
bank: AbstractControl;
  constructor(private route: ActivatedRoute,
    private fb: FormBuilder,

  private http: HttpClient, private loginservice: LoginService,
private router:Router) { }
  ngOnInit() {



    this.remitform = this.fb.group({
      minimumbound: ['', [Validators.required]],
      maxbound: ['', [Validators.required]],
      bank: ['', [Validators.required]],
      type: ['', [Validators.required]],
      charges: ['', [Validators.required]],
      percentcharges: ['', [Validators.required]],
      percentminimumbound: ['', [Validators.required]],
      percentmaxbound: ['', [Validators.required]],

    });


    this.minimumbound = this.remitform.get('minimumbound');
    this.valuechange('minimumbound', this.minimumbound);
    this.maxbound = this.remitform.get('maxbound');
    this.valuechange('maxbound', this.maxbound);
    this.bank = this.remitform.get('bank');
    this.valuechange('bank', this.bank);
   this.charges = this.remitform.get('charges');
    this.valuechange('charges', this.charges);
    this.percentcharges = this.remitform.get('percentcharges');
    this.valuechange('percentcharges', this.percentcharges);
    this.percentminimumbound = this.remitform.get('percentminimumbound');
    this.valuechange('percentminimumbound', this.percentminimumbound);
    this.percentmaxbound = this.remitform.get('percentmaxbound');
    this.valuechange('percentmaxbound', this.percentmaxbound);

  }

  valuechange(label, c: AbstractControl):void{
  c.valueChanges.pipe(debounceTime(1000)).subscribe((value)=>{
    this.seterror(c, label);
  });
  }

seterror(c: AbstractControl, label):void{
  this.errormessage[label]="";
  console.log(c);
  if((c.dirty || c.touched) && c.errors){
    let varr = Object.keys(c.errors).map((key)=>this.error[key]).join("");
console.log(varr);

this.errormessage[label]=varr;
  }
}

save():void{
  this.loginservice.user.getIdToken(/* forceRefresh */ true).then((idToken)=>{
    let others = {id:idToken}
    let hey = {content:this.remitform.value};
    let set = {...hey, ...others}
    console.log(set);
    this.http.post<any | Error>('http://localhost:3030/api/mycharges', set).pipe(
      map(d=><any>{
        message:d.message
      }),
      catchError(e=>this.HandleError(e))
    ).subscribe((data)=>{
    alert(data.message);
      }, (error)=>{
      alert(error.error.error);
    })

  })


}
err: Error = new Error();
HandleError(e:HttpErrorResponse):Observable<Error>{
  this.err.error = e.error;
  return throwError(this.err);
}
choose(optio:any): void{

  if(optio ==  "percentage"){
  let bounds  = document.getElementById("bounds");
  bounds.className= bounds.className.replace(/\bdisplay\b/g, "nodisplay");
  let percentage = document.getElementById("percentage");
  percentage.className = percentage.className.replace(/\bnodisplay\b/g, "display");
  this.charges.clearValidators();
  this.minimumbound.clearValidators();
  this.maxbound.clearValidators();
  this.charges.updateValueAndValidity();
  this.minimumbound.updateValueAndValidity();
  this.maxbound.updateValueAndValidity();
  this.percentcharges.setValidators(Validators.required);
  this.percentmaxbound.setValidators(Validators.required);
  this.percentminimumbound.setValidators(Validators.required);
  this.percentcharges.updateValueAndValidity();
  this.percentminimumbound.updateValueAndValidity();
  this.percentmaxbound.updateValueAndValidity();
  this.remitform.patchValue({
    charges: '',
    minimumbound:'',
    maxbound:''
  });
  }
  if(optio == 'bounds'){
    let bounds  = document.getElementById("bounds");
    bounds.className= bounds.className.replace(/\bnodisplay\b/g, "display");
    let percentage = document.getElementById("percentage");
    percentage.className = percentage.className.replace(/\bdisplay\b/g, "nodisplay");
    this.percentcharges.clearValidators();
    this.percentminimumbound.clearValidators();
    this.percentmaxbound.clearValidators();
    this.percentcharges.updateValueAndValidity();
    this.percentminimumbound.updateValueAndValidity();
    this.percentmaxbound.updateValueAndValidity();
    this.charges.setValidators(Validators.required);
    this.minimumbound.setValidators(Validators.required);
    this.maxbound.setValidators(Validators.required);
    this.charges.updateValueAndValidity();
    this.minimumbound.updateValueAndValidity();
    this.maxbound.updateValueAndValidity();
    this.remitform.patchValue({
      percentcharges: '',
      percentminimumbound:'',
      percentmaxbound:''
    });
  }
}

}
