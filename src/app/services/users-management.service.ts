import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../models/user";
import {Observable} from "rxjs";
import {USERS_API} from "../constants/api-urls";

@Injectable({
  providedIn: 'root'
})
export class UsersManagementService {

  constructor(private _http: HttpClient) { }

  loginUser(user: User): Observable<any> {
    return this._http.post(USERS_API + 'auth/login', user);
  }

  registerUser(user: User): Observable<any> {
    return this._http.post(USERS_API + 'auth/register', user);
  }
}
