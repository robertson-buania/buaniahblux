import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HeaderHbluxNavbarComponent} from './header-hblux-navbar.component';

describe('HeaderHbluxNavbarComponent', () => {
  let component: HeaderHbluxNavbarComponent;
  let fixture: ComponentFixture<HeaderHbluxNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderHbluxNavbarComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderHbluxNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
