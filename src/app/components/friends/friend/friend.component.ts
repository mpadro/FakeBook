import { User } from './../../../models/user';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.css']
})
export class FriendComponent implements OnInit {
  @Input() public user: User;
  @Input() public isFriend: boolean;
  @Output() public onFollow :EventEmitter<number> = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {

  }

  follow(){
    this.isFriend = !this.isFriend;
    this.onFollow.emit(this.user.id);
  }

}
