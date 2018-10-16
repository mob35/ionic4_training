import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RandomResult } from '../models/random-result';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  selectedUser: any;

  constructor(
    private http: HttpClient
  ) { }

  async getUsers() {
    let result = await this.http.get<RandomResult>('https://randomuser.me/api/?results=15').toPromise();
    return result;
  }
}
