import { Component, OnInit } from '@angular/core';
import { IUser } from './user';
import { UsersService } from './users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'email', 'address'];
  users: IUser[] = [];

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(result => {
      this.users = result;
    });
  }
}
