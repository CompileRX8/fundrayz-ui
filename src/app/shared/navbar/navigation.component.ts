import { Component } from '@angular/core';
import { AuthService } from '../authentication/auth.service';

@Component({
  moduleId: module.id,
  selector: 'fundrayz-navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent {
  constructor(private authService: AuthService) {}
}
