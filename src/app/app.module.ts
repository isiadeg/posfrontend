import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import {HttpClientModule } from '@angular/common/http';
import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component';
import {RoutingModuleModule} from './routing-module/routing-module.module';
import {HTTP_INTERCEPTORS} from '@angular/common/http';

import {RequestinterceptService} from './requestintercept.service'
import { IndexComponent } from './index/index.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { UserprofileidComponent } from './userprofileid/userprofileid.component';
import { RegistrationapprovalsComponent } from './registrationapprovals/registrationapprovals.component';
import { RegistrationapprovalsidComponent } from './registrationapprovalsid/registrationapprovalsid.component';
import { MoneyallocatedComponent } from './moneyallocated/moneyallocated.component';
import { MoneyremittedComponent } from './moneyremitted/moneyremitted.component';
import { MoneyremittedaddComponent } from './moneyremittedadd/moneyremittedadd.component';
import { MoneyremittededitComponent } from './moneyremittededit/moneyremittededit.component';
import { NbspPipe } from './nbsp.pipe';
import { MoneyallocatedaddComponent } from './moneyallocatedadd/moneyallocatedadd.component';
import { UserareaComponent } from './userarea/userarea.component';
import { DepositComponent } from './deposit/deposit.component';
import { DailytransactionComponent } from './dailytransaction/dailytransaction.component';
import { ReportComponent } from './report/report.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { TestingComponent } from './testing/testing.component';
import { ConfigurebankComponent } from './configurebank/configurebank.component';
import { VendordailyComponent } from './vendordaily/vendordaily.component';
import { VendortransactionsComponent } from './vendortransactions/vendortransactions.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { MychargesComponent } from './mycharges/mycharges.component';
import { EditdepositComponent } from './editdeposit/editdeposit.component';
import { EditwithdrawalComponent } from './editwithdrawal/editwithdrawal.component';
import { ProfitComponent } from './profit/profit.component'

@NgModule({
  declarations: [
    AppComponent,
PagenotfoundComponent,


    IndexComponent,


    UserComponent,


    AdminComponent,


    LoginComponent,


    UserprofileComponent,


    UserprofileidComponent,


    RegistrationapprovalsComponent,


    RegistrationapprovalsidComponent,


    MoneyallocatedComponent,


    MoneyremittedComponent,


    MoneyremittedaddComponent,


    MoneyremittededitComponent,


    NbspPipe,


    MoneyallocatedaddComponent,


    UserareaComponent,


    DepositComponent,


    DailytransactionComponent,


    ReportComponent,


    TransactionsComponent,


    TestingComponent,


    ConfigurebankComponent,


    VendordailyComponent,


    VendortransactionsComponent,


    WithdrawComponent,


    MychargesComponent,


    EditdepositComponent,


    EditwithdrawalComponent,


    ProfitComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RoutingModuleModule,
    ReactiveFormsModule

  ],
  providers: [ {provide: HTTP_INTERCEPTORS, useClass: RequestinterceptService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
