import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {RemmitedresolveService} from '../moneyremitted/remmitedresolve.service';
import {FormGroup, FormBuilder, FormControl, Validators, ValidatorFn, AbstractControl} from '@angular/forms';
import {debounceTime} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {LoginService} from '../login.service';
import { Message } from "../message";
import {Error} from '../error';
import {Observable, of, throwError} from 'rxjs';
import {map, catchError} from 'rxjs/operators';




@Component({
  selector: 'app-moneyremittedadd',
  templateUrl: './moneyremittedadd.component.html',
  styleUrls: ['./moneyremittedadd.component.css']
})
export class MoneyremittedaddComponent implements OnInit {
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
loading:boolean = false;
  constructor(private route: ActivatedRoute,
    private fb: FormBuilder,
    private remres:RemmitedresolveService,
  private http: HttpClient, private loginservice: LoginService,
private router:Router) { }

  ngOnInit() {
      this.uid = this.remres.idd;
    this.remitform = this.fb.group({
      where: ['', [Validators.required]],
      amount: ['', [Validators.required]]
    });


    let amount = this.remitform.get('amount');
    this.valuechange('amount', amount);

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
  this.loading= true;
  this.loginservice.user.getIdToken(/* forceRefresh */ true).then((idToken)=>{
    let others = {id:idToken, uid: this.uid}
    let hey = {content:this.remitform.value};
    let set = {...hey, ...others}

    this.http.post<any | Error>('http://localhost:3030/api/addremit', set).subscribe((data)=>{
      alert(data.message);
      this.loading= false;
      this.router.navigate(['/admin', 'user', this.uid, this.uid, 'moneyremmited'])
    }, (error)=>{
      alert(error.error);
      this.loading= false;
    })

  })


}

}
