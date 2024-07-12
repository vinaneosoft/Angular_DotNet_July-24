import { Component, Input } from '@angular/core';
import { TechnicalBook } from '../myclasses/technical-book';

@Component({
  selector: 'app-bookcard',
  templateUrl: './bookcard.component.html',
  styleUrl: './bookcard.component.css'
})
export class BookcardComponent {
  cardStyle={
    width:"300px"
  }
  @Input()
  book=new TechnicalBook(); // initialization
}
