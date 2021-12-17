import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HomeNewsLetterComponent} from './home-news-letter.component';

describe('HomeNewsLetterComponent', () => {
  let component: HomeNewsLetterComponent;
  let fixture: ComponentFixture<HomeNewsLetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeNewsLetterComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeNewsLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
