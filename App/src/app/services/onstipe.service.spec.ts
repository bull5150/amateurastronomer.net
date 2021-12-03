import { TestBed } from '@angular/core/testing';

import { OnstipeService } from './onstipe.service';

describe('OnstipeService', () => {
  let service: OnstipeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnstipeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
