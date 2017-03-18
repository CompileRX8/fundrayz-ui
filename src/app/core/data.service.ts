import { Injectable, OnInit } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { ErrorService } from "./error.service";

export interface WithId {
  id: number;
}

@Injectable()
export abstract class DataService<T extends WithId> implements OnInit {
  protected abstract baseUrl: string;
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http, private errorService: ErrorService) {
  }

  ngOnInit() {
  }

  getAll(): Promise<T[]> {
    return this.http.get(this.baseUrl)
      .toPromise()
      .then(response => response.json().data as T[])
      .catch(this.errorService.handleError);
  }

  getById(id: number): Promise<T> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as T)
      .catch(this.errorService.handleError);
  }

  getByOrganization(orgId: number): Promise<T[]> {
    const url = `${this.baseUrl}/?orgId=^${orgId}$`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as T[])
      .catch(this.errorService.handleError);
  }

  create(object: T): Promise<T> {
    return this.http
      .post(this.baseUrl, JSON.stringify(object), { headers: this.headers })
      .toPromise()
      .then(response => response.json().data as T)
      .catch(this.errorService.handleError);
  }

  deleteById(id: number): Promise<void> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete(url, { headers: this.headers })
      .toPromise()
      .then(() => null)
      .catch(this.errorService.handleError);
  }

  update(object: T): Promise<T> {
    const url = `${this.baseUrl}/${object.id}`;
    return this.http
      .put(url, JSON.stringify(object), { headers: this.headers })
      .toPromise()
      .then(() => object)
      .catch(this.errorService.handleError);
  }
}
