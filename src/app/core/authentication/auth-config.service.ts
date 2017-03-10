import { Injectable, OnInit } from '@angular/core';

export interface AuthConfiguration {
  domain: string,
  clientId: string
}

@Injectable()
export class AuthConfigService implements OnInit {
  private auth0Config: AuthConfiguration = {
    domain: 'app46506840.auth0.com',
    clientId: 'lU68uBxXPLpPjWSdHutR8jEdtJ29GPR6'
  //  clientSecret = 'qcoe1vBRGoJw0suGi4sKHwwtqIZntoqz25RuwZmLGP4I7-_wOtaymn9Yh_sok-af';
  };

  ngOnInit() {}

  getConfig(): AuthConfiguration {
    return this.auth0Config;
  }
}
