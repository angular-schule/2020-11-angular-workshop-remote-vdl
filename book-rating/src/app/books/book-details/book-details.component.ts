import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of, Subject, Subscription, timer } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit, OnDestroy {

  isbn: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      paramMap => this.isbn = paramMap.get('isbn'));


    //// ---- RxJS playground

    const observer = {
      next:  e => console.log(e),
      error: err => console.log('ERROR', err),
      // complete: () => console.log('COMPLETE')
    };

    // const observable = of('😀', '😎', '😈');

    // 3. Baustein: Observable
    const observable = new Observable(subscriber => {
      subscriber.next('🤢');
      setTimeout(() => subscriber.next('2 Sekunden'), 2000);
      setTimeout(() => subscriber.next('2,5 Sekunden'), 2500);
      setTimeout(() => subscriber.complete(), 3000);
      setTimeout(() => subscriber.next('4 Sekunden'), 4000);
    });
    const sub = observable.subscribe(observer);

    // setTimeout(() => sub.unsubscribe(), 2000);

  }

  ngOnDestroy(): void {
  }
}
