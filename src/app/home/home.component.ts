import { Component, OnInit } from '@angular/core';
import { Organization, OrganizationService } from '../organization/organization.service';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'fundrayz-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  constructor(
    private organizationService: OrganizationService,
    private router: Router
  ) {}

  private organizations: Organization[];

  ngOnInit() {
    this.organizationService
      .getAllOrganizations()
      .then(orgs => this.organizations = orgs);
  }
}
