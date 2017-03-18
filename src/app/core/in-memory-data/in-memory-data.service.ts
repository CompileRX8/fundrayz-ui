import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let organizations = [
      { id: 1, name: 'Creekwood Christian Church', metadata: { description: 'Friendly people, lots of mission trip auctions, live dessert auctions!' } },
      { id: 2, name: 'Montessori School of Fort Worth', metadata: { description: 'More friendly people, lots of auctions to fund stuff' } },
      { id: 3, name: 'Boy Scout Troop 99, Lantana, TX', metadata: { description: 'Some friendly people, selling popcorn sucks, lots of fundraising necessary' } },
    ];

    let supporters = [
      { id: 1, name: 'Highley', orgId: 1, metadata: { } },
      { id: 2, name: 'Heaton', orgId: 1, metadata: { } },
      { id: 3, name: 'DeVries', orgId: 2, metadata: { } },
      { id: 4, name: 'Linnabary', orgId: 3, metadata: { } }
    ];

    let events = [
      { id: 1, name: 'Mission Trip Auction 2014', orgId: 1, metadata: {} },
      { id: 2, name: 'Mission Trip Auction 2015', orgId: 1, metadata: {} },
      { id: 3, name: 'Mission Trip Auction 2016', orgId: 1, metadata: {} },
      { id: 4, name: 'Mission Trip Auction 2017', orgId: 1, metadata: {} }
    ];

    return { organizations, supporters, events };
  }
}
