import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AccountDetailComponent} from '../account-detail/account-detail.component';
import {AccountsComponent} from '../accounts/accounts.component';

const routes: Routes = [
  {path: '', redirectTo: '/accounts', pathMatch: 'full'},
  {path: 'detail/:id', component: AccountDetailComponent},
  {path: 'accounts', component: AccountsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
