import { TestBed, inject } from '@angular/core/testing';

import { DiOwnService } from './di-own.service';

describe('DiOwnService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DiOwnService]
    });
  });

  it('should ...', inject([DiOwnService], (service: DiOwnService) => {
    expect(service).toBeTruthy();
  }));
});
