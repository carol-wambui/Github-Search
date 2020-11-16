import { Injectable } from '@angular/core';
import { Repository } from './repository';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {
repo:Repository[]=[];
_url = 'https://api.github.com/users/';
  token = `?access_token=${environment.accesstoken}`

  constructor(public http:HttpClient) { }
  findRepoes(searchName:string): Observable<any>{
    return this.http.get(this._url+searchName + '/repos'+this.token);
  }
}
