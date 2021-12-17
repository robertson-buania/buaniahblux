import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HomeGammeComponent} from './home-gamme.component';

describe('HomeGammeComponent', () => {
  let component: HomeGammeComponent;
  let fixture: ComponentFixture<HomeGammeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeGammeComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeGammeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
