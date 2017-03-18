import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';

import { AuthService } from '../authentication/auth.service';

@Component({
  moduleId: module.id,
  selector: 'fundrayz-navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent implements OnInit {

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.currentUser().subscribe({
      next: (profile) => this.userProfile = profile
    });
  }

  userProfile: any;

  isAuthenticated(): boolean {
    if(this.authService.authenticated()) {
      if(this.userProfile) {
        return true;
      }
      this.logout();
    }
    return false;
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }

  isSiteAdmin(): boolean {
    return this.authService.isSiteAdmin();
  }
}
