import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLogin } from '../../auth/login/UserLogin';

const apiUrl = "http://localhost:8082/api/v1/rest/auth/";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(userLogin: UserLogin): Observable<any> {
    const body = { email: userLogin.email, password: userLogin.password };
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(apiUrl + 'login', body, { headers });
  }
}
