import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

export interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) {}
  signup(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDEivxXcoEIRjm6zkN0paIVBaGwmTXPFTo',
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(
        catchError((errorRes) => {
          let errorMessage = 'An unknowned error occured!';
          if (!errorRes.error || !errorRes.error.error) {
            return throwError(() => new Error(errorMessage));
          }
          if (errorRes.error.error.message === 'EMAIL_EXISTS') {
            errorMessage = 'This email already exists!';
          }
          return throwError(() => new Error(errorMessage));
        })
      );
  }

  login(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDEivxXcoEIRjm6zkN0paIVBaGwmTXPFTo',
      {
        email: email,
        password: password,
        returnSecureToken: true,
      }
    );
  }
}
