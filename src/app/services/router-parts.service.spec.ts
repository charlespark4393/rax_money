import { TestBed } from '@angular/core/testing';

import { RouterPartsService } from './router-parts.service';

describe('RouterPartsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RouterPartsService = TestBed.get(RouterPartsService);
    expect(service).toBeTruthy();
  });
});
