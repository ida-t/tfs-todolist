import { TestBed, inject } from '@angular/core/testing';

import { TodosAsyncService } from './todos-async.service';

describe('TodosAsyncService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodosAsyncService]
    });
  });

  it('should ...', inject([TodosAsyncService], (service: TodosAsyncService) => {
    expect(service).toBeTruthy();
  }));
});
