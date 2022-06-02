import { TestBed } from '@angular/core/testing';

import { ParkingsDataService } from './parkings-data.service';

describe('ParkingsDataService', () => {
  let service: ParkingsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParkingsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
