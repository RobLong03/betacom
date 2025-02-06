import { TestBed } from '@angular/core/testing';
import { CanActivateChildFn } from '@angular/router';

import { guardRoleGuard } from './guard-role.guard';

describe('guardRoleGuard', () => {
  const executeGuard: CanActivateChildFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => guardRoleGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
