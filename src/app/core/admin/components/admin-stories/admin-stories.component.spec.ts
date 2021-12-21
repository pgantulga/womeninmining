import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminStoriesComponent } from './admin-stories.component';

describe('AdminStoriesComponent', () => {
  let component: AdminStoriesComponent;
  let fixture: ComponentFixture<AdminStoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminStoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
