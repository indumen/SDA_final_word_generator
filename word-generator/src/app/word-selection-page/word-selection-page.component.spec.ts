import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordSelectionPageComponent } from './word-selection-page.component';

describe('WordSelectionPageComponent', () => {
  let component: WordSelectionPageComponent;
  let fixture: ComponentFixture<WordSelectionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordSelectionPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WordSelectionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
