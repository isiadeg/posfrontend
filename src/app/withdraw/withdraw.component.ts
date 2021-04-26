import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DepositService} from '../deposit/deposit.service';
import {FormGroup, FormBuilder, FormControl, Validators, ValidatorFn, AbstractControl} from '@angular/forms';
import {debounceTime} from 'rxjs/operators';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {LoginService} from '../login.service';
import {Message} from '../message';
import {Error} from '../error';
import {Observable, of, throwError} from 'rxjs';
import {map, catchError} from 'rxjs/operators';



@Component({
  selector: 'app-deposit',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {
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
mychargebanks: any;
mychargeObj:any;
bank: AbstractControl;
type: AbstractControl;
transfered: AbstractControl;
give: AbstractControl;
  constructor(private route: ActivatedRoute,
    private fb: FormBuilder,
    private remres: DepositService,
  private http: HttpClient, private loginservice: LoginService,
private router:Router) { }
banksi:any;
loading:boolean = false;
  ngOnInit() {
    this. banksi = this.remres.banks;
this.datasi = this.route.parent.snapshot.data['deposit'];
  this.datasi .subscribe((data)=>{
    if(data){
      this.banks = Object.keys(data.banks);
      console.log(this.banksi);
      this.mychargeObj = data.mycharge;
  this.mychargebanks = Object.keys(data.mycharge);
  console.log(this.mychargebanks);

    }

  });

      this.uid = this.remres.idd;
    this.remitform = this.fb.group({
      give: ['', [Validators.required]],
      transfered: ['', [Validators.required]],
      bank: ['', [Validators.required]],
      type: ['', [Validators.required]],

    });


    this.bank = this.remitform.get('bank');
    this.valuechange('bank', this.bank);

    this.type = this.remitform.get('type');
    this.valuechange('type', this.type);

    this.give = this.remitform.get('give');
    this.valuechange('give', this.give);

    this.transfered = this.remitform.get("transfered");


  }

  valuechange(label, c: AbstractControl):void{
  c.valueChanges/*.pipe(debounceTime(1000))*/.subscribe((value)=>{
    if(label == "give" || label == "bank"){
      this.mychargebanks.forEach((bankii)=>{
        if(this.bank.value && this.type.value && this.give.value){
          console.log(this.bank.value);
          if(bankii == this.bank.value){
          let mychargeminmax = Object.keys(this.mychargeObj[this.bank.value][this.type.value]);
          console.log(mychargeminmax);
          mychargeminmax.forEach((minmax)=>{
            let hi = minmax.lastIndexOf("_");
            let substra = hi-1;
            let addit = hi+1;
            let minid = minmax.substr(0, hi);

            console.log(minid);
            let maxid = minmax.substr(addit, minmax.length);
            console.log(maxid);
            let mind = parseInt(minid);
            let maxd = parseInt(maxid);
            if (this.give.value <= maxd && this.give.value >= mind){
            let all2 = this.mychargeObj[this.bank.value][this.type.value][minmax];
            if(all2.charges){
              console.log(all2.charges)
            let charge = all2.charges;
            charge = parseInt(charge);
            this.remitform.patchValue({
              transfered : charge+this.give.value
            });
          }
          if(all2.percentage){
            console.log(all2.percentage);
            let percentage = all2.percentage;
            percentage = parseInt(percentage);
            let toadd = percentage/100 * this.give.value;
            console.log(percentage);
            console.log(this.give.value);
            this.remitform.patchValue({
              transfered : toadd+this.give.value
            });
          }

          }
        })
      }}else{
          this.seterror(this.bank, 'bank');
          this.seterror(this.type, 'type');
          this.seterror(this.give, 'give');
        }
      });

    }
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
err:Error = new Error();

save():void{
    this.loading = true;
  this.loginservice.user.getIdToken(/* forceRefresh */ true).then((idToken)=>{
    let others = {id:idToken, uid: this.uid}
    let hey = {content:this.remitform.value};
    let set = {...hey, ...others}

    console.log(set);

    this.http.post<any | Error>('http://localhost:3030/api/withdraw', set).pipe(
      map(d=><any>{
        message:d.message
      }),
      catchError(e=>this.HandleError(e))
    ).subscribe((data)=>{
      alert(data.message);
      this.loading = false;
      this.router.navigate(['/user', this.uid, 'transactions', this.uid]);
      }, (error)=>{
      alert(error.error);
          this.loading = false;
    })

  })


}

HandleError(e:HttpErrorResponse):Observable<Error>{
  this.err.error = e.error;
  return throwError(this.err)
}

}
