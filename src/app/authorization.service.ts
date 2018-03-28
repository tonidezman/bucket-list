import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthorizationService implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const tokenLength = 36;
    const token = localStorage.getItem('token');
    if (token && token.length !== tokenLength) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }

  logout() {
    localStorage.setItem('token', '');
    this.router.navigate(['login']);
  }

  getToken() {
    return localStorage.getItem('token');
  }
}
