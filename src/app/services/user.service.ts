import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseURL: string = "https://localhost:7191/api/auth"

  constructor(private http: HttpClient) { }

  signUp(newUser: User) {
    return this.http.post(`${this.baseURL}/signup`, newUser)
  }

  signIn(email: string, password: string){
    let queryParams = new HttpParams();
    queryParams = queryParams.append('email', email);
    queryParams = queryParams.append('password', password);

    return this.http.get(`${this.baseURL}/signin`, { params: queryParams, responseType: 'text'})
           .pipe(tap((response: any) => {
               localStorage.setItem('myCoffeeToken', response);
             }));
  }  
}