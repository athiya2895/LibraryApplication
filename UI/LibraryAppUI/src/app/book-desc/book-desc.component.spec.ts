import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDescComponent } from './book-desc.component';

describe('BookDescComponent', () => {
  let component: BookDescComponent;
  let fixture: ComponentFixture<BookDescComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookDescComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
