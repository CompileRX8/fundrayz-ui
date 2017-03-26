import { Injectable } from '@angular/core';
import { WithId, DataService } from "../core/data.service";

export interface Organization extends WithId {
  name: string;
  metadata: Object;
}

@Injectable()
export class OrganizationService extends DataService<Organization> {
  protected readonly baseUrl = 'api/organizations';

}
