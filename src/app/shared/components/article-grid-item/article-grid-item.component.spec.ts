import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleGridItemComponent } from './article-grid-item.component';

describe('ArticleGridItemComponent', () => {
  let component: ArticleGridItemComponent;
  let fixture: ComponentFixture<ArticleGridItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleGridItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleGridItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
