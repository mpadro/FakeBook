import { LikeButtonDirective } from './directives/friend-button.directive';
import { DataService } from './services/data.service';
import { AuthGuard } from './authguard';
import { AuthenticationService } from './services/authentication.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './routing';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { WallComponent } from './components/wall/wall.component';
import { HeaderComponent } from './components/header/header.component';
import { FriendsComponent } from './components/friends/friends.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PostDatePipe } from './pipes/postDate.pipe';
import { AgePipe } from './pipes/age.pipe';
import { FriendComponent } from './components/friends/friend/friend.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent,
    WallComponent,
    HeaderComponent,
    FriendsComponent,
    ProfileComponent,
    LikeButtonDirective,
    PostDatePipe,
    FriendComponent,
    AgePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [AuthenticationService, AuthGuard, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
