import { async, TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthorizationService } from './authorization.service';
import { Router } from '@angular/router';

describe('AuthorizationService', () => {
  let service: AuthorizationService;
  let router: Router;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([])],
      providers: [AuthorizationService]
    });
    router = TestBed.get(Router);
    service = new AuthorizationService(router);
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('returns false if no token in localStorage', () => {
    expect(service.canActivate()).toBe(false);
  });

  it('returns false if token is present but not valid', () => {
    const invalidToken = '32xf223lf1ask';
    localStorage.setItem('token', invalidToken);
    expect(service.canActivate()).toBe(false);
  });

  it('returns true if token is valid', () => {
    const validToken = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'; // 36 characters
    localStorage.setItem('token', validToken);
    expect(service.canActivate()).toBe(true);
  });
});
