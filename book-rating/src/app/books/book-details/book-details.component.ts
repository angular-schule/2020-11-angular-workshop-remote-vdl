import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { filter, map, reduce, repeat } from 'rxjs/operators';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit, OnDestroy {

  isbn: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => this.isbn = paramMap.get('isbn'));

    //////// ----

    // 1. multipliziere alle Werte mit 10
    // 2. filtere alle Daten aus, die kleiner sind als 40 (--> 40, 50, 60, ..., 100)
    // 3. Bilde die Summe aus allen Zahlen
    // 4. (optional) Zeige so viele 🐸 an, wie die Summe groß ist
    of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10).pipe(
      map(x => x * 10),
      filter(x => x >= 40),
      reduce((x, z) => x + z),
      map(zahl => '🐸'.repeat(zahl))
    ).subscribe(console.log);

  }

  ngOnDestroy(): void {
  }
}
