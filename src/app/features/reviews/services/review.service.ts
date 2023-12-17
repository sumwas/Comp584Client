import { Injectable } from '@angular/core';
import { AddReview } from '../models/add-review.model';
import { Observable } from 'rxjs';
import { Review } from '../models/review.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private http: HttpClient, 
    private cookieService: CookieService ) { }

  

  getAllReviews() :Observable<Review[]> {
    return this.http.get<Review[]>(`${environment.apiBaseUrl}/api/reviews`);
  }



  createReview(data: AddReview) : Observable<Review> {
    return this.http.post<Review>(`${environment.apiBaseUrl}/api/reviews?addAuth=true`, data);
  }

  getReviewsForBook(bookId: string): Observable<Review[]> {
    return this.http.get<Review[]>(`${environment.apiBaseUrl}/api/books/${bookId}/reviews`);
  }
  
}
