import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookComponent } from './book/book.component';
import { MyComponent } from './dashboard/my.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DashboardComponent,
    BookComponent,
    MyComponent,
    CreateBookComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class BooksModule { }
