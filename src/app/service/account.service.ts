import {Injectable} from '@angular/core';
import {Accounts} from "../mock-accounts";
import {Account} from "../account";

@Injectable()
export class AccountService {
  constructor() {
  }

  getAccounts(): Promise<Account[]> {
    return Promise.resolve(Accounts);
  }

  getAccountById(id: number): Promise<Account> {
    return this.getAccounts().then(accounts => accounts.find(account => account.id == id));
  }
}
