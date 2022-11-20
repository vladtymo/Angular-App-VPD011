import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ILoginModel, ILoginResponse } from './user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  userKey = 'user-token'
  controllerUrl: string;

  constructor(private http: HttpClient) {
    this.controllerUrl = environment.apiUrl + "accounts/";
   }

  login(model: ILoginModel): Observable<ILoginResponse> {
    return this.http.post<ILoginResponse>(this.controllerUrl + 'login', model);
  }
  logout(): void {
    this.http.post(this.controllerUrl + 'logout', null).subscribe(res => {
      this.removeToken();
    });
  }

  saveToken(token: string): void {
    localStorage.setItem(this.userKey, token);
  }
  // getCurrentUserEmail(): string | null {
  //   return localStorage.getItem(this.userKey);
  // }
  getToken(): string | null {
    return localStorage.getItem(this.userKey);
  }
  isAuthenticated(): boolean {
    return localStorage.getItem(this.userKey) != null;
  }
  removeToken(): void {
    localStorage.removeItem(this.userKey);
  }
}
