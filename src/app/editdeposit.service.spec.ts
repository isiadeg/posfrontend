import { TestBed } from '@angular/core/testing';

import { EditdepositService } from './editdeposit.service';

describe('EditdepositService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EditdepositService = TestBed.get(EditdepositService);
    expect(service).toBeTruthy();
  });
});
