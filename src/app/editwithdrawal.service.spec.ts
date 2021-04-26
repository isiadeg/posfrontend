import { TestBed } from '@angular/core/testing';

import { EditwithdrawalService } from './editwithdrawal.service';

describe('EditwithdrawalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EditwithdrawalService = TestBed.get(EditwithdrawalService);
    expect(service).toBeTruthy();
  });
});
