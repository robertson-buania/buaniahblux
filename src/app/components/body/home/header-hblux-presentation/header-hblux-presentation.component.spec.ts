import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HeaderHbluxPresentationComponent} from './header-hblux-presentation.component';

describe('HeaderHbluxPresentationComponent', () => {
  let component: HeaderHbluxPresentationComponent;
  let fixture: ComponentFixture<HeaderHbluxPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderHbluxPresentationComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderHbluxPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
