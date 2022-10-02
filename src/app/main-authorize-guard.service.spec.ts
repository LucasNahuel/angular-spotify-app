import { TestBed } from '@angular/core/testing';

import { MainAuthorizeGuardService } from './main-authorize-guard.service';

describe('MainAuthorizeGuardService', () => {
  let service: MainAuthorizeGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainAuthorizeGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
