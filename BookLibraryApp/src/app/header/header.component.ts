import { Component } from '@angular/core';

@Component({
  selector: 'app-header', /* use this selector in html template */
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  mainHeading="VINA'S BOOK LIBRARY";
  subHeadingAtParent="";
  constructor(){
    setTimeout(()=>{
      this.mainHeading="VINA's TECHNICAL BOOKS"
    }, 5000);
  }
}
