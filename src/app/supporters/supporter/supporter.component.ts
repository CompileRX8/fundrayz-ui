import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { SupporterService, Supporter } from './supporter.service';
import { OrganizationService, Organization } from '../../organizations/organization/organization.service';
import { ErrorService } from '../../core/error.service';

@Component({
  moduleId: module.id,
  selector: 'fundrayz-supporter',
  templateUrl: 'supporter.component.html'
})
export class SupporterComponent implements OnInit {

  constructor(private supporterService: SupporterService,
              private organizationService: OrganizationService,
              private errorService: ErrorService,
              private route: ActivatedRoute,
              private location: Location) {
  }

  private supporter: Supporter;
  private organization: Organization;

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.supporterService.getById(+params[ 'id' ]))
      .subscribe((supporter: Supporter) => {
        this.supporter = supporter;

        this.organizationService.getById(supporter.orgId)
          .then((organization) => this.organization = organization)
          .catch(this.errorService.handleError)
      });
  }
}
