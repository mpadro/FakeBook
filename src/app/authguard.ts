import { AuthenticationService } from './services/authentication.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private authenticationService: AuthenticationService,
        private router: Router) { }

    canActivate() {
        return this.authenticationService.isLogged;
    }
}