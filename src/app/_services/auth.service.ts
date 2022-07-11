import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { Observable } from 'rxjs';

import { shareReplay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authApiUrl: string = 'api/v1/auth';

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post(
      this.authApiUrl + '/signin',
      {
        email,
        password
      }
    ).pipe(
      tap((res) => {this.setSession}),
      shareReplay()
    );
  }

  logout() {
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
  }

  setSession(authResult: any) {
    console.log(authResult);

    const expiresAt = moment().add(authResult.expiresIn,'second');

    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
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
    return (localStorage.getItem('token') !== null);
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
}
