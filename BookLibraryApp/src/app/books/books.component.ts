import { Component } from '@angular/core';
import { TechnicalBook } from '../myclasses/technical-book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {

  sysDate=new Date();

  tableDesignclasses=["table-info" ,"table", "table-hover" ]

  cardDesign={
    "d-flex":true,
    "flex-wrap":true
  }

  books:TechnicalBook[]=[
    new TechnicalBook("1","Learn Java", "Marlyn Dis", 560.79456, new Date("2 June 2005"), "this is JAVA book"),
    new TechnicalBook("3","Basics of java", "Preesh kumar", 460.3223, new Date("12 June 2005"), "this is java book"),
    new TechnicalBook("2","python in Easy Way", "Subhash chaturvedi", 3700.789, new Date("2 May 2001"), "this is python book"),
    new TechnicalBook("4","Web Basics", "Krish sathe", 609.99, new Date("20 Aug 2004"), "this is web basics book"),
    new TechnicalBook("5","Web Basics", "Krish sathe", 607, new Date("20 Aug 2023"), "this is web basics book")
  ]
}
