import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../services/book.service';
import { Observable } from 'rxjs';
import { Book } from '../models/book.model';
import { Review } from '../../reviews/models/review.model';
import { ReviewService } from '../../reviews/services/review.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  url: string | null = null;
  book$: Observable<Book> | undefined;
  reviews$: Observable<Review[]> | undefined;

  constructor(private route: ActivatedRoute, private bookService: BookService,
    private reviewService: ReviewService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        this.url = params.get('urlHandle'); // Use the correct parameter name
        console.log(this.url);

        if (this.url) {
          this.book$ = this.bookService.getBookByUrlHandle(this.url);

          this.book$.subscribe((book) => {
            if (book) {
              this.reviews$ = this.reviewService.getReviewsForBook(book.id);
            }
          });
        }
      }
    });
  }
}

