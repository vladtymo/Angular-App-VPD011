import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account/account.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 
  constructor(public accountService: AccountService) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.accountService.logout();
  }
}
