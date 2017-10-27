import { Observable, Subject } from 'rxjs';
import { AuthenticationService } from './../../services/authentication.service';
import { User } from './../../models/user';
import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})

export class FriendsComponent implements OnInit {
  public users: User[];
  public loggedUser: User;
  public usersToShow
  // private friendSubject: Subject<number[]>
  // public friendObservable: Observable<number[]>

  constructor(private dataService: DataService,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.loggedUser = this.authenticationService.loggedUser;
    this.dataService.getAllUsers().subscribe(users => {
      this.users = users;
      this.users = this.users.filter(user => user.id !== this.loggedUser.id )
    }
    );
  }

  get friends(): number[] {
    return this.loggedUser.friends;
  }

  isFriend(userId: number): boolean {
    return this.friends.some(friend => friend === userId)
  }

  updateFriend(userId) {
    var index = this.friends.indexOf(userId, 0);
    if (index > -1) {
      this.friends.splice(index, 1);
    } else {
      this.friends.push(userId);
    }
    this.dataService.updateUser(this.loggedUser).subscribe();
  }

}
