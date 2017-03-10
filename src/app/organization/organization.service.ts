import { Injectable, OnInit } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

export interface Organization {
  id: number;
  name: string;
  metadata: Object;
}

@Injectable()
export class OrganizationService implements OnInit {
  private organizationsUrl = 'api/organizations';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {}

  ngOnInit() {
  }

  getAllOrganizations(): Promise<Organization[]> {
    return this.http.get(this.organizationsUrl)
      .toPromise()
      .then(response => response.json().data as Organization[])
      .catch(this.handleError);
  }

  getOrganization(id: number): Promise<Organization> {
    const url = `${this.organizationsUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Organization)
      .catch(this.handleError);
  }

  createOrganization(name: string): Promise<Organization> {
    return this.http
      .post(this.organizationsUrl, JSON.stringify({name: name, metadata: {}}), { headers: this.headers })
      .toPromise()
      .then(response => response.json().data as Organization)
      .catch(this.handleError);
  }

  deleteOrganization(id: number): Promise<void> {
    const url = `${this.organizationsUrl}/${id}`;
    return this.http.delete(url, { headers: this.headers })
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  updateOrganization(org: Organization): Promise<Organization> {
    const url = `${this.organizationsUrl}/${org.id}`;
    return this.http
      .put(url, JSON.stringify(org), { headers: this.headers })
      .toPromise()
      .then(() => org)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
