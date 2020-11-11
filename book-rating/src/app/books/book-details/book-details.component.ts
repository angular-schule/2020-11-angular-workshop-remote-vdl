import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  isbn: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      paramMap => this.isbn = paramMap.get('isbn'));


    //// ---- RxJS playground

    of('😀', '😎', '😈').subscribe(
      e => console.log(e),
      err => console.log('ERROR', err),
      () => console.log('COMPLETE')
      );
  }

}
