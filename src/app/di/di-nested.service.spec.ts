import { TestBed, inject } from '@angular/core/testing';

import { DiNestedService } from './di-nested.service';

describe('DiNestedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DiNestedService]
    });
  });

  it('should ...', inject([DiNestedService], (service: DiNestedService) => {
    expect(service).toBeTruthy();
  }));
});
