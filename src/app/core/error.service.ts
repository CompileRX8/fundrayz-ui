import { Injectable, OnInit } from '@angular/core';
import { LoggerService } from "./logger.service";

@Injectable()
export class ErrorService implements OnInit {
  constructor(private loggerService: LoggerService) {}

  ngOnInit() {}

  handleError(error: any): Promise<any> {
    this.loggerService.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
