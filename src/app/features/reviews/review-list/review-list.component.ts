import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../services/review.service';
import { Observable } from 'rxjs';
import { Review } from '../models/review.model';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent implements OnInit{

  reviews$?: Observable<Review[]>;

  constructor(private reviewService: ReviewService){

  }
  ngOnInit(): void {
    this.reviews$ = this.reviewService.getAllReviews();
  }

}
