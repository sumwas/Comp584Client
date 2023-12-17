import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private cookieService: CookieService,
    private router: Router
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (this.shouldInterceptRequest(request)) {
      const authRequest = request.clone({
        setHeaders: {
          Authorization: this.cookieService.get('Authorization'),
        },
      });

      return next.handle(authRequest).pipe(
        tap((event) => {
          if (event instanceof HttpResponse) {
            // Check the response status and handle accordingly
            if (event.status === 401) {
              this.handleUnauthorized();
            }
          }
        }),
        catchError((error) => {
          // Check the error status and handle accordingly
          if (error.status === 401) {
            this.handleUnauthorized();
          }
          return throwError(error);
        })
      );
    }

    return next.handle(request);
  }

  private shouldInterceptRequest(request: HttpRequest<any>): boolean {
    return request.urlWithParams.indexOf('addAuth=true', 0) > -1 ? true : false;
  }

  private handleUnauthorized() {
    // Redirect to the login page or display a message
    // For example, redirect to the login page
    this.router.navigate(['/login']);
  }
}
