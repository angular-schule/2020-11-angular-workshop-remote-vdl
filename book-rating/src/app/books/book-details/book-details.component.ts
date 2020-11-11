import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of, Subject, Subscription, timer } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit, OnDestroy {

  isbn: string;
  private destroy$ = new Subject();

  timer$ = timer(0, 100).pipe(
    tap(console.log)
  );

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      paramMap => this.isbn = paramMap.get('isbn'));


    //// ---- RxJS playground

    // building block: OBSERVER
    // const observer = {
    //   next:  e => console.log(e),
    //   error: err => console.log('ERROR', err),
    //   complete: () => console.log('COMPLETE')
    // };

    // // const observable = of('😀', '😎', '😈');
    // const observable = timer(0, 100);

    // observable.pipe(
    //   takeUntil(this.destroy$)
    // ).subscribe(observer);

    // setTimeout(() => subscription.unsubscribe(), 5000);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }


}
