import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroWideComponent } from './hero-wide.component';

describe('HeroWideComponent', () => {
  let component: HeroWideComponent;
  let fixture: ComponentFixture<HeroWideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroWideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroWideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
