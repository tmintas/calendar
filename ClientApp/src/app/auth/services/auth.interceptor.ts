import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(request : HttpRequest<any>, requestHandler : HttpHandler) : Observable<HttpEvent<any>> {
        const user : User = JSON.parse(localStorage.getItem('user'));
        const accessToken : string = user == null ? '' : user.AccessToken;

        if (!user || !user.AccessToken) {
            return requestHandler.handle(request);
        }

        const expirationDate = JSON.parse(atob(accessToken.split('.')[1])).exp;
        console.log(new Date(expirationDate).toDateString());

        const authRequest = !!accessToken 
            ? request.clone({ setHeaders: { Authorization: `Bearer ${accessToken}` } })
            : request;

        return requestHandler.handle(authRequest);
    }
}
