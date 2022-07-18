import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { Observable } from 'rxjs';

import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authApiUrl: string = 'http://localhost:8080/api/v1/auth';

  constructor(
    private http: HttpClient,
    private router: Router) { }

  getUserDate() {
    console.log(this.getDecodedAccessToken(this.getToken() as string))
    return {
      email: this.getDecodedAccessToken(this.getToken() as string).sub,
      username: this.getDecodedAccessToken(this.getToken() as string).nickName,
      role: this.getDecodedAccessToken(this.getToken() as string).role === 'ADMIN' ? 'Администратор' : 'Пользователь'
    }
  }
  
  login(email: string, password: string) {
    return this.http.post(
      this.authApiUrl + '/signin',
      {
        email,
        password
      }
    )
  }

  logout() {
    localStorage.removeItem("auth_token");
    this.router.navigate(['/']);
  }


  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(
      this.authApiUrl + '/signup',
      {
        username,
        email,
        password
      }
    );
  }

  public isLoggedIn(): boolean {
    return (localStorage.getItem('auth_token') !== null);
    // return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
      return !this.isLoggedIn();
  }

  getExpiration() {
      const expiration = localStorage.getItem("expires_at");
      const expiresAt = JSON.parse(expiration!);
      return moment(expiresAt);
  }

  getToken() {
    return localStorage.getItem('auth_token') as string;
  }

  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch(Error) {
      return null;
    }
  }
}
