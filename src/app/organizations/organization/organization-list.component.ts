import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrganizationService, Organization } from "./organization.service";

@Component({
  moduleId: module.id,
  selector: 'fundrayz-organization-list',
  templateUrl: './organization-list.component.html'
})
export class OrganizationListComponent implements OnInit {
  constructor(
    private organizationService: OrganizationService,
    private route: ActivatedRoute
  ) {}

  private organizations: Organization[];

  ngOnInit() {
    this.organizationService.getAll().then(orgs => this.organizations = orgs);
  }
}
