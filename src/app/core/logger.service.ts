
export class LoggerService {
  static log(msg: string, ...params: any[]) {
    console.log(msg, ...params);
  }

  static error(msg: string, ...params: any[]) {
    console.error(msg, ...params);
  }
}
