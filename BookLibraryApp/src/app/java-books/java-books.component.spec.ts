import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaBooksComponent } from './java-books.component';

describe('JavaBooksComponent', () => {
  let component: JavaBooksComponent;
  let fixture: ComponentFixture<JavaBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JavaBooksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JavaBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
