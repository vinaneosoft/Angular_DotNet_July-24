import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BooksComponent } from './books/books.component';


const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'techbooks',
    component:BooksComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // to add array of route in root
  exports: [RouterModule] // to use it in root module : AppModule
})
export class AppRoutingModule { }
