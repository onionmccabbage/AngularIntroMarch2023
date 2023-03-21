import { TestBed } from '@angular/core/testing';

import { DeletemeGuard } from './deleteme.guard';

describe('DeletemeGuard', () => {
  let guard: DeletemeGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DeletemeGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
