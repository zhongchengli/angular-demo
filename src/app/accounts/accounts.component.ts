import {Component, OnInit} from '@angular/core';
import {AccountService} from '../service/account.service';
import {Account} from '../account';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  accounts: Account[];

  constructor(private accountService: AccountService) {
  }

  ngOnInit() {
    this.getAccounts();
  }

  getAccounts(): void {
    this.accountService.getAccounts().then(accounts => this.accounts = accounts);
  }

}
