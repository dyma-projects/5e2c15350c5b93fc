import { User } from './../share/user.model';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../share/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  public users: User[];

  constructor(private service:UserService ) { }

  ngOnInit() {
    this.service.users.subscribe( data => this.users = data);
  }

}
