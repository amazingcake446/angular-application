import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroduktionComponent } from './introduktion.component';

describe('IntroduktionComponent', () => {
  let component: IntroduktionComponent;
  let fixture: ComponentFixture<IntroduktionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroduktionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroduktionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
