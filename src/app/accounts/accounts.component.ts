import {Component, OnInit} from '@angular/core';
import {AccountService} from '../service/account.service';
import {Account} from '../account';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  constructor(private accountService: AccountService) {
  }

  ngOnInit() {

  }

  get accounts() {
    return this.accountService.getAccounts();
  }

  deleteAccount(id: number): void {
    this.accountService.deleteAccountById(id);
  }

  openModal(): void {

  }
}
