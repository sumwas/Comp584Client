import { Component } from '@angular/core';
import { LoginRequest } from '../models/login-request.model';
import { AuthService } from '../services/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  model: LoginRequest;

  constructor(private authService: AuthService,
    private cookieService: CookieService,
    private router: Router ) {
    this.model = {
      email: '',
      password: ''
    }
  }

  onFormSubmit(): void {
    this.authService.login(this.model)
    .subscribe({
      next: (response) => {
        //auth cookie 
        this.cookieService.set('Authorization', `Bearer ${response.token}`,
        undefined, '/', undefined, true, 'Strict');

        //set the user
        this.authService.setUser({
          email: response.email,
          roles: response.roles
        });

        //redirect to Books
        this.router.navigateByUrl('/books');
      }
    });
  }
}
