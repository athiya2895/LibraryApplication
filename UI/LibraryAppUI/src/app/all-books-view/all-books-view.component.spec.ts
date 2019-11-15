import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllBooksViewComponent } from './all-books-view.component';

describe('AllBooksViewComponent', () => {
  let component: AllBooksViewComponent;
  let fixture: ComponentFixture<AllBooksViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllBooksViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllBooksViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
