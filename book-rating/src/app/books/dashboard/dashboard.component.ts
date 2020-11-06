import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  books: Book[];

  constructor(private rs: BookRatingService) { }

  ngOnInit(): void {
    this.books = [{
      isbn: '000',
      title: 'Angular',
      description: 'Tolles Buch',
      rating: 5
    }, {
      isbn: '111',
      title: 'AngularJS',
      description: 'Altes Buch',
      rating: 3
    }, {
      isbn: '222',
      title: 'React',
      description: 'Buch halt',
      rating: 1
    }];
  }

  doRateDown(book: Book): void {
    const ratedBook = this.rs.rateDown(book);
    console.table(ratedBook);
  }

  doRateUp(book: Book): void {
    const ratedBook = this.rs.rateUp(book);
    console.table(ratedBook);
  }
}
