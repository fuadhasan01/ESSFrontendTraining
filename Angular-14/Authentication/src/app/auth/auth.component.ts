import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthResponseData, AuthService } from './auth-service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent {
  isLoginMode = true;
  spinning = false;
  error!: string | null;

  constructor(private authService: AuthService, private router: Router) {}

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }
  onSubmit(authForm: NgForm) {
    this.spinning = true;
    let authObs: Observable<AuthResponseData>;
    if (authForm.valid) {
      if (this.isLoginMode) {
        authObs = this.authService.login(
          authForm.value.email,
          authForm.value.password
        );
      } else {
        authObs = this.authService.signup(
          authForm.value.email,
          authForm.value.password
        );
      }
      authObs.subscribe({
        next: (response) => {
          console.log(response);
          this.spinning = false;
          this.router.navigate(['/recipes']);
        },
        error: (errorMessage) => {
          console.log(errorMessage);
          this.error = errorMessage;
          this.spinning = false;
        },
      });
    }
    authForm.reset();
  }
}
