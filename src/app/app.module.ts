import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { AccountComponent } from './account/account.component';
import { AccountsComponent } from './accounts/accounts.component';
import {AccountService} from "./service/account.service";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    AccountComponent,
    AccountsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
