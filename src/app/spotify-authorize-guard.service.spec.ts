import { TestBed } from '@angular/core/testing';

import { SpotifyAuthorizeGuardService } from './spotify-authorize-guard.service';

describe('SpotifyAuthorizeGuardService', () => {
  let service: SpotifyAuthorizeGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpotifyAuthorizeGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
