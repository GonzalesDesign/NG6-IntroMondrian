import { TestBed, inject } from '@angular/core/testing';

import { IntroDataService } from './intro-data.service';

describe('IntroDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IntroDataService]
    });
  });

  it('should be created', inject([IntroDataService], (service: IntroDataService) => {
    expect(service).toBeTruthy();
  }));
});
