import { TestBed } from '@angular/core/testing';

import { RouterScrollServiceService } from './router-scroll-service.service';

describe('RouterScrollServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RouterScrollServiceService = TestBed.get(RouterScrollServiceService);
    expect(service).toBeTruthy();
  });
});
