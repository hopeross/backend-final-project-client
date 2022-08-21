import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseURL: string = "https://localhost:7191/api/auth"
  tokenKey: string = "myTokenString";

  constructor(private http: HttpClient) { }

  signUp(newUser: User) {
    return this.http.post(`${this.baseURL}/signup`, newUser)
  }

  signIn(email: string, password: string) {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('email', email);
    queryParams = queryParams.append('password', password);

    //TODO REPLACE THIS - I NEED TO LEARN HOW TO NOT BROADCAST PII
    return this.http.get(`${this.baseURL}/signin`, { params: queryParams, responseType: 'text' })
      .pipe(tap((response: any) => {
        localStorage.setItem('myTokenString', response);
      }));
  }
  
  signout() {
    localStorage.removeItem("myTokenString");
  }

  getUser(userId: string) {
    let reqHeaders = {
      Authorization: `Bearer ${localStorage.getItem(this.tokenKey)}`
    }
    return this.http.get<User>(this.baseURL + "/" + userId, { headers: reqHeaders });
  }

  updateUser(updatedUser: User) {
    let reqHeaders = {
      Authorization: `Bearer ${localStorage.getItem(this.tokenKey)}`
    }
    return this.http.put(this.baseURL + "/" + updatedUser.userId, updatedUser, { headers: reqHeaders })
  }

  getCurrentUser() {
    let reqHeaders = {
      Authorization: `Bearer ${localStorage.getItem(this.tokenKey)}`
    }
    return this.http.get(this.baseURL + "/current", { headers: reqHeaders });
  }
}