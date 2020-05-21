import { UserService } from './../share/user.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { User } from '../share/user.model';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  @ViewChild('input') public el: ElementRef;

  constructor(private service:UserService) { }

  ngOnInit() {
  }

  addUser() {
    const username = this.el.nativeElement.value;
    if (username) {
      this.service.addUser(new User(username));
      this.el.nativeElement.value = '';
    }
  }

}
