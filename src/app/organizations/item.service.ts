import { Injectable } from '@angular/core';
import { WithId, DataService } from "../core/data.service";

export interface Item extends WithId {
  name: string;
  eventId: number;
  itemNumber: string;
  metadata: Object;
}

@Injectable()
export class ItemService extends DataService<Item> {
  protected readonly baseUrl = 'api/items';

}
