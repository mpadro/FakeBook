import { Post } from './../../models/post';
import { User } from './../../models/user';
import { DataService } from './../../services/data.service';
import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css']
})
export class WallComponent implements OnInit {
  public posts: Post[] = [];
  private postUsers: number[];
  public users: User[] = [];

  constructor(private dataService: DataService, private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.postUsers = this.authenticationService.loggedUser.friends.slice().concat(this.authenticationService.loggedUser.id);
    this.dataService.getUsers(this.postUsers)
      .subscribe(users => {
        this.users = users;
        this.users.forEach(user => {
          user.posts.forEach(post => {
            let postToDisplay = Object.assign({},post);
            postToDisplay.userid = user.id;
            postToDisplay.username = user.name;
            this.posts.push(postToDisplay);
          })
        })

        this.sortPostsByDate();

      })
  }

  like(likedPost: Post) {
    likedPost.likes++;
    let user = this.users.find(user => user.id === likedPost.userid);
    user.posts.find(post => post.postid === likedPost.postid).likes++;
    
    if (user.id === this.authenticationService.loggedUser.id) {
      this.authenticationService.loggedUser = user;
    }
    this.dataService.updateUser(user).subscribe();
  }

  sortPostsByDate() {
    this.posts.sort(function compare(a, b) {
      return moment(a.date, 'DD/MM/YYYY HH:mm').isBefore(moment(b.date, 'DD/MM/YYYY HH:mm')) ? 1 : -1;
    });
  }

}
