import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  @Input()
  mainHeadingAtChild="";

  subHeading="tech books"  //1.

  @Output()  //2.
  eventEmitter=new EventEmitter<string>();

   /* constructor(){
    this.shareData(); // constructor does not have ability to emit events
  }  */
  ngOnInit(){ // automatically called when componet object gets created 
      this.shareData();
  } 
  shareData(){
    this.eventEmitter.emit(this.subHeading); //3.
  }
}
