import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TechnicalBook } from '../myclasses/technical-book';

@Component({
  selector: 'app-book-input',
  templateUrl: './book-input.component.html',
  styleUrl: './book-input.component.css'
})
export class BookInputComponent {
  bookInputForm:FormGroup;
  book=new TechnicalBook();
  constructor(){
    this.bookInputForm=new FormGroup({
      id:new FormControl("", [Validators.required]),
      bookName:new FormControl("", [Validators.required]),
      bookAuthor:new FormControl("",[Validators.required]),
      bookPrice:new FormControl("", [Validators.required]),
      bookPublishDate:new FormControl("", [Validators.required]),
      bookDescription:new FormControl("", [Validators.required]),
      bookImage:new FormControl("",[]),
      bookConfirmPrice:new FormControl("", [Validators.required])
    });
  }
/* to easily access formcontrol object on html page */
  get id(){
    return this.bookInputForm.get("id");
  }
  get bookName(){
    return this.bookInputForm.get("bookName");
  }
  get bookAuthor(){
    return this.bookInputForm.get("bookAuthor");
  }
  get bookPrice(){
    return this.bookInputForm.get("bookPrice");
  }
  get bookPublishDate(){
    return this.bookInputForm.get("bookPublishDate");
  }
  get bookDescription(){
    return this.bookInputForm.get("bookDescription");
  }
  get bookImage(){
    return this.bookInputForm.get("bookImage");
  }
  get bookConfirmPrice(){
    return this.bookInputForm.get("bookConfirmPrice");
  }

  collectData(){
   // console.log(this.bookInputForm);
   //console.log(this.bookInputForm.controls); // to get all form controls
   //console.log(this.bookInputForm.get("id")); // to get individual form control
  // console.log(this.bookInputForm.value.id="45");
  // console.log(this.bookInputForm.value.bookName="Java");
   //console.log(this.bookInputForm.value);
   this.book=this.bookInputForm.value; // if we have keys for both same then assignment is possible
   console.log(this.book);
   this.addBook();
  }
  addBook(){
     // in http chapter we will send this book to backend via post request
  }
}
