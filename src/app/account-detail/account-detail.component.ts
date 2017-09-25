import {Component, Input, OnInit} from '@angular/core';
import {Account} from '../account';
import {AccountService} from '../service/account.service';
import {ActivatedRoute, ParamMap, Params} from '@angular/router';
import {Location} from '@angular/common';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.css'],
})
export class AccountDetailComponent implements OnInit {
  visible = false;
  visibleAnimate = false;
  accountDetail: Account;

  constructor(private accountService: AccountService,
              private route: ActivatedRoute, private location: Location) {
  }

  ngOnInit(): void {
    // this.route.paramMap.switchMap((params: ParamMap) => this.accountService.getAccountById(+params['id']))
    //   .subscribe(account => this.accountDetail = account);
    this.route.params.subscribe((params: Params) => this.accountDetail = this.accountService.getAccountById(+params['id']));
    console.log(' accountDetail.name = ' + this.accountDetail.firstname);
    this.show();
  }

  show(): void {
    this.visible = true;
    setTimeout(() => this.visibleAnimate = true, 100);
  }

  hide(): void {
    this.visibleAnimate = false;
    setTimeout(() => this.visible = false, 300);
    this.location.back();
  }

  onContainerClicked(event: MouseEvent): void {
    if ((<HTMLElement>event.target).classList.contains('modal')) {
      this.hide();
    }
  }

  updateAccount(account: Account): void {
    this.accountService.updateAccountById(account.id, account);
    this.hide();
  }

}
