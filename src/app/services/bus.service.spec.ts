import { TestBed } from '@angular/core/testing';

import { BusService } from './bus.service';

describe('BusService', () => {
  let service: BusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

