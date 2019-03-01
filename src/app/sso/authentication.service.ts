import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { User } from 'src/app/models/user';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

    public currentUser: User

    login(login: string, mdp: string): boolean {

        let user = new User()
        user.load()

        console.log(login, mdp)

        if ( user.username.toLowerCase() != login.toLowerCase() || user.password != mdp ) {
            return false
        }
        
        this.currentUser = user
        localStorage.setItem('currentUser', JSON.stringify(this.currentUser));

        return true
    }

    logout() {
        localStorage.removeItem('currentUser');
        this.currentUser = null
    }

}

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const currentUser = this.authenticationService.currentUser;

        // authorised
        if (currentUser instanceof User) {
            return true;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login']);
        return false;
    }
}