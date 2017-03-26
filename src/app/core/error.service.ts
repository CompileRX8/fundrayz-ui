import { LoggerService } from "./logger.service";

export class ErrorService {

  static handleError(error: any): Promise<any> {
    LoggerService.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
