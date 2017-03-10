import { Component, OnInit } from '@angular/core';
import { AuthService } from '../authentication/auth.service';

@Component({
  moduleId: module.id,
  selector: 'fundrayz-navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent implements OnInit {

  constructor(private authService: AuthService) {}

  ngOnInit() {}

  isAuthenticated(): boolean {
    return this.authService.authenticated();
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }
}
