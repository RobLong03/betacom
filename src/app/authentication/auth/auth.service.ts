import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn=false;
  isAdmin=false;

  constructor() { }

  setAutenticated() {

    this.isLoggedIn=true;
  }

  setLoggedOut() {

    this.isLoggedIn=false;
  }

  setRoleAdmin() {

    this.isAdmin=true;
  }

  setRoleUser() {

    this.isAdmin=false;
  }

  isAutentificated() {

    return this.isLoggedIn;
  }

  isRoleAdmin() {

    return this.isAdmin;
  }
}
