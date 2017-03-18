import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from "../core/authentication/auth.service";

import 'rxjs/add/operator/switchMap';

@Component({
  moduleId: module.id,
  selector: 'fundrayz-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private route: ActivatedRoute
  ) {}

  private userProfile: any;

  ngOnInit() {
    this.authService.currentUser().subscribe({
      next: (profile) => this.userProfile = profile
    });
  }
}
