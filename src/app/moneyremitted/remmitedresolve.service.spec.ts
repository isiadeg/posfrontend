import { TestBed } from '@angular/core/testing';

import { RemmitedresolveService } from './remmitedresolve.service';

describe('RemmitedresolveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RemmitedresolveService = TestBed.get(RemmitedresolveService);
    expect(service).toBeTruthy();
  });
});
