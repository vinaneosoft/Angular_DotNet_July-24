import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LearningComponent } from './learning/learning.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { BooksComponent } from './books/books.component';
import { BookcardComponent } from './bookcard/bookcard.component';
import { YearsPipe } from './mypipes/years.pipe';
import { HomeComponent } from './home/home.component';
import { ViewNotFoundComponent } from './view-not-found/view-not-found.component';
import { JavaBooksComponent } from './java-books/java-books.component';
import { PythonBooksComponent } from './python-books/python-books.component';
import { BookInputComponent } from './book-input/book-input.component';
import { OrderbyPipe } from './mypipes/orderby.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    LearningComponent,
    LoginComponent,
    BooksComponent,
    BookcardComponent,
    YearsPipe,
    HomeComponent,
    ViewNotFoundComponent,
    JavaBooksComponent,
    PythonBooksComponent,
    BookInputComponent,
    OrderbyPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
