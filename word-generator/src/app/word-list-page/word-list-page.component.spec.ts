import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordListPageComponent } from './word-list-page.component';

describe('WordListPageComponent', () => {
  let component: WordListPageComponent;
  let fixture: ComponentFixture<WordListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordListPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WordListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
