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

  constructor(private http: Http) {
  }

  ngOnInit() {
  }

  private getUrlArray(url: string): Promise<T[]> {
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as T[])
      .catch(ErrorService.handleError);
  }

  getAll(): Promise<T[]> {
    return this.getUrlArray(this.baseUrl);
  }

  getById(id: number): Promise<T> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as T)
      .catch(ErrorService.handleError);
  }

  getByOrganization(orgId: number): Promise<T[]> {
    const url = `${this.baseUrl}/?orgId=^${orgId}$`;
    return this.getUrlArray(url);
  }

  getByEvent(eventId: number): Promise<T[]> {
    const url = `${this.baseUrl}/?eventId=^${eventId}$`;
    return this.getUrlArray(url);
  }

  create(object: T): Promise<T> {
    return this.http
      .post(this.baseUrl, JSON.stringify(object), { headers: this.headers })
      .toPromise()
      .then(response => response.json().data as T)
      .catch(ErrorService.handleError);
  }

  deleteById(id: number): Promise<void> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete(url, { headers: this.headers })
      .toPromise()
      .then(() => null)
      .catch(ErrorService.handleError);
  }

  update(object: T): Promise<T> {
    const url = `${this.baseUrl}/${object.id}`;
    return this.http
      .put(url, JSON.stringify(object), { headers: this.headers })
      .toPromise()
      .then(() => object)
      .catch(ErrorService.handleError);
  }
}
