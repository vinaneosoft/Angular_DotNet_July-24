import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-book-input',
  templateUrl: './book-input.component.html',
  styleUrl: './book-input.component.css'
})
export class BookInputComponent {

  bookInputForm:FormGroup;

  constructor(){
    this.bookInputForm=new FormGroup({
      id:new FormControl(""),
      bookName:new FormControl(""),
      bookAuthor:new FormControl(""),
      bookPrice:new FormControl(""),
      bookPublishDate:new FormControl(""),
      bookDescription:new FormControl(""),
      bookImage:new FormControl(""),
      bookConfirmPrice:new FormControl("")
    });
  }
}
