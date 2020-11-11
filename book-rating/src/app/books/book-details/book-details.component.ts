import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { filter, map, reduce, repeat } from 'rxjs/operators';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit, OnDestroy {

  isbn$ = this.route.paramMap.pipe(
    map(paraMap => paraMap.get('isbn')),
    map(isbn => this.bs.getSingleBook(isbn))
  );

  constructor(private route: ActivatedRoute, private bs: BookStoreService) { }

  ngOnInit(): void {
    this.isbn$.subscribe(obs$ =>
      obs$.subscribe(console.log));

  }

  ngOnDestroy(): void {
  }
}
