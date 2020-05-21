import { User } from './user.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users:BehaviorSubject<User[]> =new BehaviorSubject([]);
  constructor() { }
  addUser(user :User){
    const usersTempo = this.users.value.slice();
    usersTempo.push(user);
    this.users.next(usersTempo);
  }
}
