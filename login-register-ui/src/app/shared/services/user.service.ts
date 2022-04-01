import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  login(user: any): Observable<any> {
    return this.http.post(environment.apiURL + 'login', user);
  }

  register(user: any): Observable<any> {
    return this.http.post(environment.apiURL + 'register', user);
  }

  getUsers() {
    return this.http.get(environment.apiURL + 'users');
  }
}