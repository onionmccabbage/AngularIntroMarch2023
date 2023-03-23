import { TestBed, inject } from '@angular/core/testing';

import { GetSwapiService } from './get-swapi.service';

describe('GetSwapiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetSwapiService]
    });
  });

  it('should be created', inject([GetSwapiService], (service: GetSwapiService) => {
    expect(service).toBeTruthy();
  }));
});
