import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferencesInfoComponent } from './conferences-info.component';

describe('ConferencesInfoComponent', () => {
  let component: ConferencesInfoComponent;
  let fixture: ComponentFixture<ConferencesInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConferencesInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConferencesInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
