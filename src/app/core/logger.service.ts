import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {
  log(msg: string, ...params: any[]) {
    console.log(msg, params);
  }
  error(msg: string, ...params: any[]) {
    console.error(msg, params);
  }
}
