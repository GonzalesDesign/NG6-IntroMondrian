import { TestBed, inject } from '@angular/core/testing';

import { IntroAnimService } from './intro-anim.service';

describe('IntroAnimService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IntroAnimService]
    });
  });

  it('should be created', inject([IntroAnimService], (service: IntroAnimService) => {
    expect(service).toBeTruthy();
  }));
});
