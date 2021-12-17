import { TestBed } from '@angular/core/testing';

import { HbluxTraitementService } from './hblux-traitement.service';

describe('HbluxTraitementService', () => {
  let service: HbluxTraitementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HbluxTraitementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
