import { Injectable } from '@angular/core';
import { WithId, DataService } from "../../core/data.service";

export interface Event extends WithId {
  name: string;
  orgId: number;
  metadata: Object;
}

@Injectable()
export class EventService extends DataService<Event> {
  protected readonly baseUrl = 'api/events';

}
