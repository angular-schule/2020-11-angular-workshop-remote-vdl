import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'br-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent {

  bookForm = new FormGroup({
    isbn: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    title: new FormControl('', Validators.required),
    description: new FormControl()
  });

  isInvalid(name: string): boolean {
    const control = this.bookForm.get(name);
    return control.invalid && control.touched;
  }

  // Hands On
  // schreibe eine hasError Methode,
  // die bei einem spezifischen Validator aktiv wird
  // z.B. hasError('isbn', 'required')
  isHasError(name: string, code: string): boolean {
    return false; // TODO
  }

}
