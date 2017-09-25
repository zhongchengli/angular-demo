import {Injectable} from '@angular/core';
import {Accounts} from '../mock-accounts';
import {Account} from '../account';

@Injectable()
export class AccountService {
  accounts: Account[] = Accounts;

  constructor() {
  }

  // getAccounts(): Promise<Account[]> {
  //   return Promise.resolve(Accounts);
  // }

  getAccountById(id: number): Account {
    // return this.getAccounts().then(accounts => accounts.find(account => account.id === id));
    return this.accounts.filter(account => account.id === id).pop();
  }

  addAccount(account: Account): AccountService {
    if (!account.id) {
      account.id = ++this.accounts.length;
    }
    this.accounts.push(account);
    return this;
  }

  getAccounts(): Account[] {
    return this.accounts;
  }

  deleteAccountById(id: number): AccountService {
    this.accounts = this.accounts.filter(account => account.id !== id);
    return this;
  }

  updateAccountById(id: number, values: Object = {}): Account {
    const account = this.getAccountById(id);
    console.log('id in updateAccountById of accountService is ' + id);
    if (!account) {
      return null;
    }
    Object.assign(account, values);
    // Save into database
    return account;
  }

}
