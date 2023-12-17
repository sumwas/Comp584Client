import { Component, OnInit } from '@angular/core';
import { AddReview } from '../models/add-review.model';
import { ReviewService } from '../services/review.service';
import { Router } from '@angular/router';
import { BookService } from '../../books/services/book.service';
import { Observable } from 'rxjs';
import { Book } from '../../books/models/book.model';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent implements OnInit {

  
  model: AddReview;
  books$?: Observable<Book[]>;

  constructor(private reviewService: ReviewService,
    private router: Router, 
    private bookService: BookService) {
    this.model = {
      title: '',
      rating: '',
      content: '',
      publishedDate: new Date(),
      author: '',
      bookId: ''
      
    }
  }
  ngOnInit(): void {
    this.books$ = this.bookService.getAllBooks();
  }

  onFromSubmit(): void {
    console.log(this.model.bookId); // Check the entire book object
    //console.log(this.model.bookTitle.title); // Check title
    //console.log(this.model.bookTitle.plotSummary); // Check plotSummary

    this.reviewService.createReview(this.model)
    .subscribe({
      next: (response) => {
        this.router.navigateByUrl('/reviews');
      }
    });
  }
  
  
  
  

  
}
