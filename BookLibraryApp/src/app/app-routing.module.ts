import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BooksComponent } from './books/books.component';
import { HomeComponent } from './home/home.component';
import { ViewNotFoundComponent } from './view-not-found/view-not-found.component';
import { JavaBooksComponent } from './java-books/java-books.component';
import { PythonBooksComponent } from './python-books/python-books.component';
import { BookInputComponent } from './book-input/book-input.component';


const routes: Routes = [
  {
    path:'', 
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'home', //userdefined path small letters, dont use space
    component:HomeComponent,
    children:[
        {
          path:'javainfo',
          component:JavaBooksComponent
        },
        {
          path:'pythoninfo',
          component:PythonBooksComponent
        }
    ] 
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'techbooks',
    component:BooksComponent
  },
  {
    path:"addbook",
    component:BookInputComponent
  },
  {
    path:"**",
    component:ViewNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // to add array of route in root
  exports: [RouterModule] // to use it in root module : AppModule
})
export class AppRoutingModule { }


