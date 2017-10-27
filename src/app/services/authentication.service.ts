import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable, BehaviorSubject } from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
  private usersUrl = 'http://localhost:3000/users';
  public isLogged = new BehaviorSubject<boolean> (false);
  public loggedUser: User;

  constructor(private http: Http) { }

  get IsLoggedIn() {
    return this.isLogged.asObservable();
  }

  login(username: string, password: string) :Observable<boolean> {
    return this.http.get(this.usersUrl,{params: {user: username, password: password}})
      .map((response: Response) => {
        let user: User = response.json()[0];
        if (user) {
          this.loggedUser = user;
          this.isLogged.next(true);
          return true;
        } 
        else {
          this.isLogged.next(false);
          return false;
        }
      });
  }

  logout() {
    this.isLogged.next(false);
    this.loggedUser = null;
  }

}
