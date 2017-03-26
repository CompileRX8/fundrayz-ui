import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { SupporterService, Supporter } from '../supporter.service';
import { OrganizationService, Organization } from '../../organizations/organization.service';
import { ErrorService } from '../../core/error.service';
import { LoggerService } from "../../core/logger.service";

@Component({
  moduleId: module.id,
  selector: 'fundrayz-supporter',
  templateUrl: 'supporter.component.html'
})
export class SupporterComponent implements OnInit {

  constructor(private supporterService: SupporterService,
              private organizationService: OrganizationService,
              private route: ActivatedRoute) {
  }

  private supporter: Supporter;
  private organization: Organization;

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => {
        LoggerService.log("SupporterComponent: params = %s", JSON.stringify(params));
        let orgId = +params[ 'orgId' ];
        return this.supporterService.getById(orgId);
      })
      .subscribe((supporter: Supporter) => {
        LoggerService.log("SupporterComponent: supporter = %s", JSON.stringify(supporter));
        this.supporter = supporter;

        this.organizationService.getById(supporter.orgId)
          .then((organization) => this.organization = organization)
          .catch(ErrorService.handleError)
      });
  }
}
