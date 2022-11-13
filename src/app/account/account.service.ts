import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILoginModel } from './user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  userKey = 'user-key'
  apiUrl = 'https://localhost:7173/api/';

  constructor(private http: HttpClient) { }

  login(model: ILoginModel): Observable<any> {
    return this.http.post(this.apiUrl + 'accounts/login', model);
  }
  logout(): void {
    this.http.post(this.apiUrl + 'accounts/logout', null).subscribe(res => {
      this.removeUser();
    });
  }

  saveUser(email: string): void {
    localStorage.setItem(this.userKey, email);
  }
  getCurrentUserEmail(): string | null {
    return localStorage.getItem(this.userKey);
  }
  isAuthenticated(): boolean {
    return localStorage.getItem(this.userKey) != null;
  }
  removeUser(): void {
    localStorage.removeItem(this.userKey);
  }
}
