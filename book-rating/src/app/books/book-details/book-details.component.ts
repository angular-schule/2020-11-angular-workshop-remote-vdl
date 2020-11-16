import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, concatMap, filter, map, mergeMap, reduce, repeat, retry, share, shareReplay, switchMap, withLatestFrom } from 'rxjs/operators';
import { BookStoreService } from '../shared/book-store.service';
import { selectBookViaIsbn } from '../store/book.selectors';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent {

  showDetails = false;

  book$ = this.route.paramMap.pipe(
    map(paraMap => paraMap.get('isbn')),
    switchMap(isbn => this.bs.getSingleBook(isbn).pipe(
      retry(3),
      catchError((err: HttpErrorResponse) => of({
        title: 'Error',
        description: err.message
      }))
    ))
  );

  // TODO Johannes
  // book$ = this.route.paramMap.pipe(
  //   map(paraMap => paraMap.get('isbn')),
  //   // map(([isbn, state]) => select()
  //   concatMap(isbn => withLatestFrom(() =>
  //     this.store.pipe(select(selectBookViaIsbn, isbn))
  //   ))
  // );

  constructor(private route: ActivatedRoute,
              private store: Store) { }
}
