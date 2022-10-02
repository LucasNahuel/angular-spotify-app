import { TestBed } from '@angular/core/testing';

import { LoginAuthorizeaGuardService } from './login-authorizea-guard.service';

describe('LoginAuthorizeaGuardService', () => {
  let service: LoginAuthorizeaGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginAuthorizeaGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
