import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let organizations = [
      { id: 1, name: 'Creekwood Christian Church', metadata: { description: 'Friendly people, lots of mission trip auctions, live dessert auctions!' } },
      { id: 2, name: 'Montessori School of Fort Worth', metadata: { description: 'More friendly people, lots of auctions to fund stuff' } },
      { id: 3, name: 'Boy Scout Troop 99, Lantana, TX', metadata: { description: 'Some friendly people, selling popcorn sucks, lots of fundraising necessary' } },
    ];
    return { organizations };
  }
}
