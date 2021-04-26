import { TestBed } from '@angular/core/testing';

import { AllocatedService } from './allocated.service';

describe('AllocatedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AllocatedService = TestBed.get(AllocatedService);
    expect(service).toBeTruthy();
  });
});
