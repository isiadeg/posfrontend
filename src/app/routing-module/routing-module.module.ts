import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import{IndexComponent} from '../index/index.component';
import {PagenotfoundComponent} from '../pagenotfound/pagenotfound.component';
import {AdminComponent} from '../admin/admin.component';
import {LoginComponent} from '../login/login.component';
import {AdminResolverService} from '../admin-resolver.service';
import {RegistrationapprResolverService} from '../registrationappr-resolver.service';
import {AdminGuardGuard} from '../admin-guard.guard';
import {RegistrationapprovalsComponent} from '../registrationapprovals/registrationapprovals.component';
import {RegistrationapprovalsidComponent} from '../registrationapprovalsid/registrationapprovalsid.component';
import {UserprofileService} from '../userprofile.service';
import {UserComponent} from '../user/user.component';
import {UserprofileComponent} from '../userprofile/userprofile.component'
import {UserprofileidComponent} from '../userprofileid/userprofileid.component'
import {DetailsresolveService} from '../detailsresolve.service'
import {RemmitedresolveService} from '../moneyremitted/remmitedresolve.service';
import {MoneyremittedaddComponent} from '../moneyremittedadd/moneyremittedadd.component';
import {MoneyremittededitComponent} from '../moneyremittededit/moneyremittededit.component';
import {MoneyremittedComponent  } from "../moneyremitted/moneyremitted.component";
import {MoneyallocatedComponent}from '../moneyallocated/moneyallocated.component';
import {AllocatedService} from '../moneyallocated/allocated.service';
import {UserareaComponent} from '../userarea/userarea.component';
import { DepositComponent } from "../deposit/deposit.component";
import { DepositService } from "../deposit/deposit.service";
import {MoneyallocatedaddComponent}from '../moneyallocatedadd/moneyallocatedadd.component';
import {VendorGuard} from '../vendor.guard';
import {DailytransactionComponent} from '../dailytransaction/dailytransaction.component';
import { DailytransactionService } from "../dailytransaction.service";
import {ReportComponent} from "../report/report.component";
import {ReportService} from '../report.service';
import {TransactionsComponent} from '../transactions/transactions.component';
import {TransactionsService} from '../transactions.service';
import {TestingComponent} from '../testing/testing.component';
import { ConfigurebankComponent } from "../configurebank/configurebank.component";
import{VendordailyComponent} from '../vendordaily/vendordaily.component';
import {VendordailyService} from '../vendordaily.service';
import {VendortransactionsComponent} from '../vendortransactions/vendortransactions.component';
import {VendortransactionsService} from '../vendortransactions.service';
import {WithdrawComponent} from '../withdraw/withdraw.component';
import {MychargesComponent} from '../mycharges/mycharges.component';
import {EditdepositService} from '../editdeposit.service';
import {EditwithdrawalService} from '../editwithdrawal.service';
import {EditdepositComponent} from '../editdeposit/editdeposit.component';
import {EditwithdrawalComponent} from '../editwithdrawal/editwithdrawal.component';
import {ProfitComponent} from '../profit/profit.component';
import {ProfitService} from '../profit.service';


 const routes=[
  {path: 'index', component: IndexComponent
},
{path: 'testing', component: TestingComponent
},
{path:'login', component: LoginComponent},
{path: 'admin', component: AdminComponent,  canActivate: [AdminGuardGuard],
canActivateChild: [AdminGuardGuard],
 children: [
{
  path: 'registrationapprovals', component: RegistrationapprovalsComponent, resolve:{resolveadmin: AdminResolverService}
},
{
  path: 'users', component: UserComponent, resolve:{userprofile: UserprofileService}
},
{
  path: 'report', component: ReportComponent, resolve:{report: ReportService},
},
{
  path: 'configure', component: ConfigurebankComponent
},
{
  path: 'configuremycharges', component: MychargesComponent
},
{
  path: 'profit', component: ProfitComponent, resolve :{profit:ProfitService}
},

{
  path: 'user/:id', component: UserprofileComponent, resolve:{useriprofile: DetailsresolveService},
children:[


    {
      path: 'userdetails', component: UserprofileidComponent
    },
    {
      path: 'dailytransaction/:id', component: DailytransactionComponent, resolve:{daily: DailytransactionService},
    },
    {
      path: 'transactions/:id', component: TransactionsComponent, resolve:{transactions: TransactionsService},
    },
        {path: ':id', resolve:{remmiteddetails: RemmitedresolveService }, children:[
          {
            path: 'moneyremmited', component: MoneyremittedComponent
          },
          //hildren
          //c
          {
            path: 'moneyremmitedadd', component: MoneyremittedaddComponent
          },
          {
            path: 'moneyallocated/:id', component: MoneyallocatedComponent, resolve:{allocated: AllocatedService}
          },
          {
            path: 'moneyallocatedadd/:id', component: MoneyallocatedaddComponent
          },
        /*  {
            path: 'moneyremmited/edit', component: MoneyremittededitComponent
          },*/
          {
            path: '',  redirectTo: 'moneyremmited', pathMatch: 'full'
          }
        ]},

    {
      path: '',  redirectTo: 'userdetails', pathMatch: 'full'
    }


]
},
{
path: 'registrationapprovalsid/:id', component: RegistrationapprovalsidComponent, resolve:{resolveregistration: RegistrationapprResolverService}
},
{path: '', redirectTo: '/admin/users', pathMatch: 'full'},
]},
{path: 'user/:id', component: UserareaComponent, resolve:{deposit: DepositService},  canActivate: [VendorGuard],
canActivateChild: [VendorGuard],
 children: [

{
  path: 'deposit', component: DepositComponent
},
{
  path: 'withdraw', component: WithdrawComponent
},
{
  path: 'editwithdrawal/:date/:timestamp', component: EditwithdrawalComponent, resolve:{editwithdrawal: EditwithdrawalService}
},
{
  path: 'editdeposit/:date/:timestamp', component: EditdepositComponent, resolve:{editdeposit: EditdepositService}
},
{
  path: 'dailytransaction/:id', component: DailytransactionComponent, resolve:{daily: DailytransactionService},
},
{
  path: 'transactions/:id', component: TransactionsComponent, resolve:{transactions: TransactionsService},
},
    //{
    //  path: 'userdetails', component: UserprofileidComponent
    //},

    {
      path: '',  redirectTo: 'deposit', pathMatch: 'full'
    }

]},

{path: '', redirectTo: '/index', pathMatch: 'full'},
{path: '**', component: PagenotfoundComponent}]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[ RouterModule]
})
export class RoutingModuleModule { }
