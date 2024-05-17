import { TestBed } from '@angular/core/testing';

import { GetProductsSuggestedService } from './get-products-suggested.service';

describe('GetProductsSuggestedService', () => {
  let service: GetProductsSuggestedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetProductsSuggestedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
