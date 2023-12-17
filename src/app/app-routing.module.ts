import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './features/books/book-list/book-list.component';
import { ReviewListComponent } from './features/reviews/review-list/review-list.component';
import { AddReviewComponent } from './features/reviews/add-review/add-review.component';
import { LoginComponent } from './features/auth/login/login.component';
import { BookDetailsComponent } from './features/books/book-details/book-details.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'books',
    component: BookListComponent
  },
  {
    path: 'books/:urlHandle',
    component: BookDetailsComponent
  },
  {
    path: 'reviews',
    component: ReviewListComponent
  },
  {
    path: 'reviews/add',
    component: AddReviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
