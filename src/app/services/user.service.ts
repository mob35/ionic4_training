import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RandomResult } from '../models/random-result';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  selectedUser: any;
  remoteData: RandomResult;

  constructor(
    private http: HttpClient
  ) { }

  async getUsers() {
    let result = await this.http.get<RandomResult>('https://randomuser.me/api/?results=10').toPromise();
    this.remoteData = result;
    return result;
  }
  searchUserFromEmail(email) {
    if (this.remoteData) {
      return this.remoteData.results.find((item: any) => {
        if (item.email === email) {
          return true;
        }
      }, (err) => {
        return false;
      });
    }
    return undefined;

  }
}
