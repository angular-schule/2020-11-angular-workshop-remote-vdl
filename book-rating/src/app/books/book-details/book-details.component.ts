import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, filter, map, mergeMap, reduce, repeat, switchMap } from 'rxjs/operators';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent {

  book$ = this.route.paramMap.pipe(
    map(paraMap => paraMap.get('isbn')),
    switchMap(isbn => this.bs.getSingleBook(isbn)),
    catchError((err: HttpErrorResponse) => of({
      title: 'Error',
      description: err.message
    }))
  );

  constructor(private route: ActivatedRoute,
              private bs: BookStoreService) { }
}
