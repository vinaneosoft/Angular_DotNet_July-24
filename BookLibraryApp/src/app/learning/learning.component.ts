import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrl: './learning.component.css'
})
export class LearningComponent {
    chapterName="Data Binding" // data
    addResult=0;
    age=0;

    bookNames=[
      'Learn Java in Easy way', 
      'Basics of Java', 
      'Web Basics All in one', 
      'Fundamentals of Python',
      'Java in Detail'
    ]


    constructor(){
      setTimeout(()=>{
        this.chapterName="1 Way and 2 Way Data Binding"
       // console.log(this.chapterName);
      }, 5000);
     // console.log(this.chapterName);
      
    }
    test():void{
      //console.log(this.chapterName);
    }
    addNums(num1:any,num2:any){
     // console.log(num1);
    //  console.log(typeof num1);
      //console.log(num2);
    //  console.log(typeof num2);
      this.addResult=parseFloat(num1)+parseFloat(num2);
    }
    accessTemplate(template:any){
    //  console.log(template);
      console.log(typeof template);
     console.log(template.innerText);
     console.log(template.children);
    }
}
