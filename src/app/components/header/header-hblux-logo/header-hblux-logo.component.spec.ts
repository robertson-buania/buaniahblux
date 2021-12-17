import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HeaderHbluxLogoComponent} from './header-hblux-logo.component';

describe('HeaderHbluxLogoComponent', () => {
  let component: HeaderHbluxLogoComponent;
  let fixture: ComponentFixture<HeaderHbluxLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderHbluxLogoComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderHbluxLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
