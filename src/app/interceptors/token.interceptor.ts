import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {UsersManagementService} from "../services/users-management.service";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private usersService: UsersManagementService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = request.clone({
      setHeaders: {
        Authorization: "Bearer " + this.usersService.getToken()
      }
    });
    return next.handle(request);
  }
}
