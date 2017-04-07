import { TestBed, inject } from '@angular/core/testing';

import { DiSharedService } from './di-shared.service';

describe('DiSharedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DiSharedService]
    });
  });

  it('should ...', inject([DiSharedService], (service: DiSharedService) => {
    expect(service).toBeTruthy();
  }));
});
