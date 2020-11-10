import { ChangeDetectionStrategy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  // Vorsicht: später hier ein Bug (bei Ajax)!
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {

  books: Book[] = [];

  constructor(private rs: BookRatingService, private bs: BookStoreService) { }

  ngOnInit(): void {
    this.bs.getBooks().subscribe(books => this.books = books);
  }

  doRateDown(book: Book): void {
    const ratedBook = this.rs.rateDown(book);
    // const ratedBook = {
    //   ...book,
    //   rating: book.rating < 5 ? book.rating + 1 : 5
    // };
    this.update(ratedBook);
  }

  doRateUp(book: Book): void {
    const ratedBook = this.rs.rateUp(book);
    this.update(ratedBook);
    // fieser CD bug
    // this.books[2].title = 'fooo';
  }

  update(ratedBook: Book): void {
    this.books = this.books
      .map(b => b.isbn === ratedBook.isbn ? ratedBook : b)
      .sort((a, b) => b.rating - a.rating);
  }

  addBook(newBook: Book): void {
    this.books = [...this.books, newBook];
  }
}
