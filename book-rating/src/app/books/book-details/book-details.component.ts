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
      complete: () => console.log('COMPLETE')
    };

    // const observable = of('😀', '😎', '😈');

    const observable = new Observable(obs => {
      obs.next('🤢');
      // obs.error('42');
      setTimeout(() => obs.next('2 Sekunden'), 2000);
      const x = setTimeout(() => { obs.next('3 Sekunden'); console.log('Ich bin ein Zombie'); }, 3000);

      return () => {
        clearTimeout(x);
      };
    });
    const sub = observable.subscribe(observer);

    setTimeout(() => sub.unsubscribe(), 2000);

  }

  ngOnDestroy(): void {
  }
}
