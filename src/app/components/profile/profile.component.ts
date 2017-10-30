import { DataService } from './../../services/data.service';
import { AuthenticationService } from './../../services/authentication.service';
import { User } from './../../models/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public user: User;
  public friends: User[];

  constructor(private authenticationService: AuthenticationService, private dataService: DataService) { }

  ngOnInit() {
    this.user = this.authenticationService.loggedUser;
    this.getFriends()
  }

  getFriends() {
    if (this.user.friends.length > 0 ) {
      this.dataService.getUsers(this.user.friends)
        .subscribe(users => this.friends = users)
    }
  }
}
