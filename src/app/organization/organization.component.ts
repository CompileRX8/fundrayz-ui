import { Component, OnInit } from '@angular/core';
import { OrganizationService, Organization } from './organization.service';
import { ActivatedRoute, Params} from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

@Component({
  moduleId: module.id,
  selector: 'fundrayz-organization',
  templateUrl: 'organization.component.html'
})
export class OrganizationComponent implements OnInit {

  constructor(
    private organizationService: OrganizationService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  private organization: Organization;

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.organizationService.getOrganization(+params['id']))
      .subscribe((org: Organization) => this.organization = org);
  }
}
