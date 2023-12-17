import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { Book } from '../models/book.model';
import { Observable } from 'rxjs';
import { Review } from '../../reviews/models/review.model';
import { ReviewService } from '../../reviews/services/review.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books$?: Observable<Book[]>;
  reviews$?: Observable<Review[]>;


  constructor(private bookService: BookService, 
    private reviewService: ReviewService,
    private route: ActivatedRoute ){

  }

  ngOnInit(): void {
    this.books$ = this.bookService.getAllBooks();
  }

}
