import { Injectable, OnInit } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

import { AuthConfigService } from './auth-config.service';
import { ErrorService } from "../error.service";

declare let Auth0Lock: any;

@Injectable()
export class AuthService implements OnInit {
  private lock: any;

  private userProfileSubject: BehaviorSubject<any>;
  private userProfile: any;

  constructor(private authConfigService: AuthConfigService) {
    this.userProfileSubject = new BehaviorSubject(null);

    let auth0Config = this.authConfigService.getConfig();
    this.lock = new Auth0Lock(auth0Config.clientId, auth0Config.domain, auth0Config.options);

    this.lock.on("authenticated", (authResult) => {
        this.lock.getUserInfo(authResult.accessToken, (error, profile) => {
          if(error) {
            ErrorService.handleError(error);
            alert(error);
            return;
          }

          localStorage.setItem('id_token', authResult.idToken);

          profile.app_metadata = profile.app_metadata || {};
          profile.user_metadata = profile.user_metadata || {};
          localStorage.setItem('profile', JSON.stringify(profile));

          this.setUserProfile(profile);
        });
      }
    );
  }

  private setUserProfile(profile: any): void {
    this.userProfile = profile;
    this.userProfileSubject.next(profile);
  }

  currentUser(): Observable<any> {
    return this.userProfileSubject;
  }

  ngOnInit(): void {
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
    this.setUserProfile(null);
  }

  isSiteAdmin(): boolean {
    return this.authenticated() && this.userProfile && this.userProfile.app_metadata && (this.userProfile.app_metadata.site_admin == true);
  }
}
