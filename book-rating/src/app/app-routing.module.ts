import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'books', pathMatch: 'full' },
  { path: 'books', loadChildren:
    () => import('./books/books.module').then(m => m.BooksModule) },
  { path: '**', redirectTo: 'books' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // enableTracing: true,
    scrollPositionRestoration: 'top', // when state management: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
