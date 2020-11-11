import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of, Subscription, timer } from 'rxjs';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit, OnDestroy {

  isbn: string;
  sub: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      paramMap => this.isbn = paramMap.get('isbn'));


    //// ---- RxJS playground

    // building block: OBSERVER
    const observer = {
      next:  e => console.log(e),
      error: err => console.log('ERROR', err),
      complete: () => console.log('COMPLETE')
    };

    // const observable = of('😀', '😎', '😈');
    const observable = timer(0, 100);

    this.sub = observable.subscribe(observer);

    // setTimeout(() => subscription.unsubscribe(), 5000);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }


}
