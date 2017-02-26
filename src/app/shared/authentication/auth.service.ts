import { Injectable, OnInit } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { auth0Config } from './auth-config.service';

declare var Auth0Lock: any;

@Injectable()
export class AuthService implements OnInit {
  private lock: any;

  userProfile: any;

  constructor() {}

  ngOnInit(): void {
    this.lock = new Auth0Lock(auth0Config.clientId, auth0Config.domain, {});
    this.lock.on("authenticated", (authResult) => {
        localStorage.setItem('id_token', authResult.idToken);

        this.lock.getProfile(authResult.idToken, (error, profile) => {
          if(error) {
            alert(error);
            return;
          }

          profile.app_metadata = profile.app_metadata || {};
          profile.user_metadata = profile.user_metadata || {};
          localStorage.setItem('profile', JSON.stringify(profile));
          this.userProfile = profile;
        });
      }
    )
  }

  login(): void {
    this.lock.show();
  }

  authenticated(): boolean {
    return tokenNotExpired();
  }

  logout(): void {
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
    this.userProfile = undefined;
  }
}
