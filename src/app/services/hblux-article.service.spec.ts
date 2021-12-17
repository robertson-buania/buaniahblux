import {TestBed} from '@angular/core/testing';

import {HbluxArticleService} from './hblux-article.service';

describe('HbluxArticleService', () => {
  let service: HbluxArticleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HbluxArticleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
