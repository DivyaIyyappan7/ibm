import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookCreateComponent } from './book-create/book-create.component';
import { BookListComponent } from './book-list/book-list.component';
import { RootComponent } from './root/root.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import {AppComponent} from ''



@NgModule({
  declarations: [BookCreateComponent, BookListComponent, RootComponent],
  imports: [
    HttpClientModule,BrowserModule,FormsModule,ReactiveFormsModule
  ],bootstrap:[RootComponent]
})
export class AppModule { }
