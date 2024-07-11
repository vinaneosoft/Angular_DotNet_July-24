import { Component } from '@angular/core';
import { TechnicalBook } from '../myclasses/technical-book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {

  cardStyle={
    width:"300px"
  }

  tableDesignclasses=["table-info" ,"table", "table-hover" ]

  cardDesign={
    "d-flex":true,
    "flex-wrap":true
  }

  books:TechnicalBook[]=[
    new TechnicalBook("1","Learn Java", "Marlyn Dis", 560.79, new Date("2 June 2005"), "this is java book"),
    new TechnicalBook("3","Basisc of Java", "Preesh kumar", 760.3, new Date("12 June 2005"), "this is java book"),
    new TechnicalBook("2","Python in Easy Way", "Subhash chaturvedi", 700, new Date("2 May 2001"), "this is python book"),
    new TechnicalBook("4","Web Basics", "Krish sathe", 560.99, new Date("20 Aug 2004"), "this is web basics book")
  ]

}
