import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CliBootComponent } from './cli-boot.component';

describe('CliBootComponent', () => {
  let component: CliBootComponent;
  let fixture: ComponentFixture<CliBootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CliBootComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CliBootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
