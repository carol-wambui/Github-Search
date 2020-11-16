import { Injectable } from '@angular/core';
import { User } from './user';
import { Repository } from './repository';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  user: User[] = [];
  repo: Repository[] = [];

  _url = 'https://api.github.com/users/';
  token = `?access_token=${environment.accesstoken}`


  constructor(private http: HttpClient) { }
  findUser(searchName: string) {
    interface data {
      name: string;
      login: string;
      following: number;
      followers: number;
    }

    return new Promise((resolve, reject) => {
      this.user = [];

      this.http.get<data>(this._url + searchName + this.token).toPromise().then(
        (res) => {
          this.user.push(res);
          resolve();
        },
        (error) => {
          reject();
        }
      )
    })
  }
}
