import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  storageKey = 'resource-manager-jwt';
  expire = 'expire';

  constructor(private router: Router) { }

//  setToken(token: string, expire: number) {
  setToken(token: string) {  
    localStorage.setItem(this.storageKey, token);
 //   localStorage.setItem(this.expire, expire.toString());
  }

  getToken() {
    return localStorage.getItem(this.storageKey);
  }

  isLoggedIn() {
//    console.log(localStorage.getItem(this.expire));
    return this.getToken() !== null 
//    return this.getToken() !== null && localStorage.getItem(this.expire);
  }

  logout() {
    localStorage.removeItem(this.storageKey);
    this.router.navigate(['/login']);
  }

}
