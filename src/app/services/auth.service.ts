// src/app/auth/auth.service.ts

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import * as auth0 from 'auth0-js';

declare var auth0Lock: any;

(window as any).global = window;

@Injectable()
export class Auth {
    lock = new auth0Lock('VEId1uVkBzREO2Yf47e6hwM9cFR5ROJ4','appandwebdevelopers.auth0.com', {});

  auth0 = new auth0.WebAuth({
    clientID: 'VEId1uVkBzREO2Yf47e6hwM9cFR5ROJ4',
    domain: 'appandwebdevelopers.auth0.com',
    responseType: 'token id_token',
    audience: 'https://appandwebdevelopers.auth0.com/userinfo',
    redirectUri: 'http://localhost:3000/callback',
    scope: 'openid'
  });

  constructor(public router: Router) {}

  public login(): void {
    // this.auth0.authorize();
    this.lock.show();
  }

}