import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { OrganizationService, Organization } from '../organization.service';
import { SupporterService, Supporter } from '../../supporters/supporter.service';
import { ErrorService } from "../../core/error.service";
import { BreadcrumbService } from "../../core/navbar/breadcrumb.service";
import { LoggerService } from "../../core/logger.service";

@Component({
  moduleId: module.id,
  selector: 'fundrayz-organization',
  templateUrl: 'organization-detail.component.html'
})
export class OrganizationDetailComponent implements OnInit {

  constructor(private organizationService: OrganizationService,
              private supporterService: SupporterService,
              private breadcrumbService: BreadcrumbService,
              private route: ActivatedRoute) {
  }

  private organization: Organization;
  private supporters: Supporter[];

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => {
        LoggerService.log("OrganizationDetailComponent: params = %s", JSON.stringify(params));
        let orgId = +params['orgId'];
        return this.organizationService.getById(+params[ 'orgId' ]);
      })
      .subscribe((org: Organization) => {
        LoggerService.log("OrganizationDetailComponent: org = %s", JSON.stringify(org));
        this.organization = org;

        this.supporterService.getByOrganization(org.id)
          .then((supporters) => this.supporters = supporters)
          .catch(ErrorService.handleError);

//        this.breadcrumbService.changeBreadcrumb(this.route.snapshot, org.name);
      });
  }
}
