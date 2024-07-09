import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrl: './learning.component.css'
})
export class LearningComponent {
    chapterName="Data Binding" // data

    constructor(){
      setTimeout(()=>{
        this.chapterName="1 Way and 2 Way Data Binding"
        console.log(this.chapterName);
      }, 5000);
      console.log(this.chapterName);
      
    }
    test():void{
      console.log(this.chapterName);
    }
}
