import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapperHeroComponent } from './wrapper-hero.component';

describe('WrapperHeroComponent', () => {
  let component: WrapperHeroComponent;
  let fixture: ComponentFixture<WrapperHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WrapperHeroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
