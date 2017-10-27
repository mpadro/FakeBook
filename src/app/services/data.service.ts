import { User } from './../models/user';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

@Injectable()
export class DataService {
  private header = new Headers();
  private baseUrl='http://localhost:3000/'

  constructor(private http: Http) { }

  getAllUsers(): Observable<User[]>{
    return this.http.get(`${this.baseUrl}users`)
    .map((res: Response) => res.json());
  }

  getUsers(userIds: number[]): Observable<User[]>{
    return this.http.get(`${this.baseUrl}users`, { params: { id: userIds}})
    .map((res: Response) => res.json());
  }

  updateUser(user: User) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions();
    options.headers = headers;
 

    return this.http.put(`${this.baseUrl}users/${user.id}`, user, options)
  }

}
