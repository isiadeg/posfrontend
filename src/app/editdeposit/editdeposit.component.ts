import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DepositService} from '../deposit/deposit.service';
import {FormGroup, FormBuilder, FormControl, Validators, ValidatorFn, AbstractControl} from '@angular/forms';
import {debounceTime} from 'rxjs/operators';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {LoginService} from '../login.service';
import {Observable, of, throwError} from 'rxjs';
import {Message} from '../message';
import {Error} from '../error';
import {map, catchError} from 'rxjs/operators';




@Component({
  selector: 'app-editdeposit',
  templateUrl: './editdeposit.component.html',
  styleUrls: ['./editdeposit.component.css']
})
export class EditdepositComponent implements OnInit {
  remitform: FormGroup;
  errormessage:any={};
  loginerror: any;
loading:boolean = false;
  private error ={
    required: "This field is required",
      email: "Please enter correct email",
      minlength: "Your password must be at least six characters",
      passwordmatch: "Your password did not match"
  }
  dta:any;
  before:any ={};
uid: any;
datasi:any;
banks:any;
mychargebanks: any;
mychargeObj:any;
bank: AbstractControl;
type: AbstractControl;
transfered: AbstractControl;
collected: AbstractControl;
  constructor(private route: ActivatedRoute,
    private fb: FormBuilder,
    private remres: DepositService,
  private http: HttpClient, private loginservice: LoginService,
private router:Router) { }
banksi:any;
  ngOnInit() {
    this. banksi = this.remres.banks;
    this.remitform = this.fb.group({
      collected: ['', [Validators.required]],
      transfered: ['', [Validators.required]],
      bank: ['', [Validators.required]],
      type: ['', [Validators.required]],

    })

this.datasi = this.route.parent.snapshot.data['deposit'];
  this.datasi .subscribe((data)=>{
    if(data){
    this.banks = Object.keys(data.banks);
    console.log(this.banksi);
    this.mychargeObj = data.mycharge;
this.mychargebanks = Object.keys(data.mycharge);
console.log(this.mychargebanks);
  this.datasi = this.route.snapshot.data['editdeposit'];
  this.datasi .subscribe((data)=>{
    this.dta = data;
    this.before.type =  data.type;
    console.log(this.before.type);
    let zzzi= Date.now();
    console.log(zzzi);



    this.before.bank =  data.bank;

        //dati[datetime]
        //obj["amountcollectedfromcustomer"] = remaining["amountcollectedfromcustomer"];
      this.before.amountremaininginbank=data.amountremaininginbank;
      this.before.amountremaininginhand = data.amountremaininginhand;
        //obj["amounttransferedtocustomer"] = remaining["amounttransferedtocustomer"];
      this.before.charge = data.bankcharges;
      this.before.date = data.date;
      this.before.timestamp = data.time;
      this.before.profit = data.profit;
    this.before.collected = data.amountcollectedfromcustomer;
      this.before.transfered = data.amounttransferedtocustomer;


      this.remitform.patchValue({
        transfered : this.before.transfered,
        collected: this.before.collected,
        bank: this.before.bank,
        type: this.before.type
      });
  this.loading = false;

  });
    }

  });

      this.uid = this.remres.idd;

    this.bank = this.remitform.get('bank');
    this.valuechange('bank', this.bank);

    this.type = this.remitform.get('type');
    this.valuechange('type', this.type);

    this.transfered = this.remitform.get('transfered');
    this.valuechange('transfered', this.transfered);

    this.collected = this.remitform.get("collected");

  }

  valuechange(label, c: AbstractControl):void{
  c.valueChanges/*.pipe(debounceTime(1000))*/.subscribe((value)=>{
    if(label == "transfered" || label == "bank"){
      this.mychargebanks.forEach((bankii)=>{
        if(this.bank.value && this.type.value && this.transfered.value){
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
            if (this.transfered.value <= maxd && this.transfered.value >= mind){
            let all2 = this.mychargeObj[this.bank.value][this.type.value][minmax];
            if(all2.charges){
              console.log(all2.charges)
            let charge = all2.charges;
            charge = parseInt(charge);
            this.remitform.patchValue({
              collected : charge+this.transfered.value
            });
          }
          if(all2.percentage){
            console.log(all2.percentage);
            let percentage = all2.percentage;
            percentage = parseInt(percentage);
            let toadd = percentage/100 * this.transfered.value;
            console.log(percentage);
            console.log(this.transfered.value);
            this.remitform.patchValue({
              collected : toadd+this.transfered.value
            });
          }

          }
        })
      }}else{
          this.seterror(this.bank, 'bank');
          this.seterror(this.type, 'type');
          this.seterror(this.transfered, 'transfered');
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

save():void{
  this.loading = true;
  this.loginservice.user.getIdToken(/* forceRefresh */ true).then((idToken)=>{
    let others = {id:idToken, uid: this.uid}
    let hey = {content:this.remitform.value};
      let before = {before: this.before};
    let set = {...hey, ...others, ...before}

    this.http.post<any | Error>('http://localhost:3030/api/deposit', set).pipe(
      map(d=><any>{
      message: d.message
    }), catchError(e=>this.handleError(e))).subscribe((data)=>{
      alert(data.message);
      this.loading = false;
      this.router.navigate(['/user', this.uid, 'transactions', this.uid]);
      }, (error)=>{
      console.log(error.error.error);

      this.loading = false;
    })

  })


}
err:Error = new Error();
handleError(e:HttpErrorResponse):Observable<Error>{
  this.err.error = e.error;
  return throwError(this.err);
}
}
