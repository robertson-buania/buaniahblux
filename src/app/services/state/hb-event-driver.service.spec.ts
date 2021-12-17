import {TestBed} from '@angular/core/testing';

import {HbEventDriverService} from './hb-event-driver.service';

describe('HbEventDriverService', () => {
  let service: HbEventDriverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HbEventDriverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
