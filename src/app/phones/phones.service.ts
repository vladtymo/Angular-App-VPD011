import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IPhone } from './phone';

@Injectable({
  providedIn: 'root'
})
export class PhonesService {

  controllerUrl: string;

  constructor(private http: HttpClient) {
    this.controllerUrl = environment.apiUrl + "phones/";
   }

  getAllPhones(): Observable<IPhone[]> {
    return this.http.get<IPhone[]>(this.controllerUrl + "collection");
  }

  getPhoneById(id: number): Observable<IPhone> {
    return this.http.get<IPhone>(this.controllerUrl + id);
  }
}
