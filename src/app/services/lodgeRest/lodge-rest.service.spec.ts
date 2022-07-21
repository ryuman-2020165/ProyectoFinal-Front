import { TestBed } from '@angular/core/testing';

import { LodgeRestService } from './lodge-rest.service';

describe('LodgeRestService', () => {
  let service: LodgeRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LodgeRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
