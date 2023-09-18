import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '../services';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class NoAuthGuard {
    constructor(public authService: AuthService, public router: Router) { }
    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | UrlTree | boolean {
        const currentUser = this.authService.currentUserValue; 
        if (currentUser) {
            this.router.navigate(["/dashboard/index"]);
            return true;
        } else {
            return true;
        }
    }
}