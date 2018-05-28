import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelper} from 'angular2-jwt';

@Injectable()
export class AuthService {

  jwtHelper: JwtHelper = new JwtHelper();
  storageKey = 'resource-manager-jwt';

  constructor(private router: Router) { }

  setToken(token: string) {  
    localStorage.setItem(this.storageKey, token);
  }

  getToken() {
    return localStorage.getItem(this.storageKey);
  }

  isLoggedIn() {
    var token = this.getToken();
    return token !== null && !this.jwtHelper.isTokenExpired(token);
  }

  logout() {
    localStorage.removeItem(this.storageKey);
    this.router.navigate(['/login']);
  }
}
