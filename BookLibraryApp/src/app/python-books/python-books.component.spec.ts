import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PythonBooksComponent } from './python-books.component';

describe('PythonBooksComponent', () => {
  let component: PythonBooksComponent;
  let fixture: ComponentFixture<PythonBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PythonBooksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PythonBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
