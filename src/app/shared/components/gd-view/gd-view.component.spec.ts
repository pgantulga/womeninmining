import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GdViewComponent } from './gd-view.component';

describe('GdViewComponent', () => {
  let component: GdViewComponent;
  let fixture: ComponentFixture<GdViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GdViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GdViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
