import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryDetailHeaderComponent } from './story-detail-header.component';

describe('StoryDetailHeaderComponent', () => {
  let component: StoryDetailHeaderComponent;
  let fixture: ComponentFixture<StoryDetailHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoryDetailHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryDetailHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
