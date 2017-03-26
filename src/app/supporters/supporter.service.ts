import { Injectable } from '@angular/core';
import { WithId, DataService } from "../core/data.service";

export interface Supporter extends WithId {
  name: string;
  orgId: number;
  metadata: Object;
}

@Injectable()
export class SupporterService extends DataService<Supporter> {
  protected readonly baseUrl = 'api/supporters';

}
