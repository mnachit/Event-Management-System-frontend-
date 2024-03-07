import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UserLogin } from '../../auth/login/UserLogin';

const apiUrl = "http://localhost:8082/api/v1/rest/auth/login";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(userLogin: UserLogin): Observable<any> {
    return this.http.post<any>(apiUrl, userLogin).pipe(
      catchError(error => {
        // Handle error response
        let errorMessage = 'An unknown error occurred';
        if (error && error.error && error.error.errors && error.error.errors.length > 0) {
          errorMessage = error.error.errors[0].message;
        }
        return throwError(errorMessage);
      })
    );
  }
}
