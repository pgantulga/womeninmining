import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapperCardComponent } from './wrapper-card.component';

describe('WrapperCardComponent', () => {
  let component: WrapperCardComponent;
  let fixture: ComponentFixture<WrapperCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WrapperCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
