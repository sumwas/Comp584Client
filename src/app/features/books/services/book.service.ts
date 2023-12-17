import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/book.model';
import { environment } from 'src/environments/environment';
import { AddReview } from '../../reviews/models/add-review.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  

  constructor(private http: HttpClient) { }

  getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${environment.apiBaseUrl}/api/Books`);
  }

  getBookByUrlHandle(urlHandle: string): Observable<Book> {
    return this.http.get<Book>(`${environment.apiBaseUrl}/api/Books/${urlHandle}`);
  }

  getBookById(id: string): Observable<Book> {
    return this.http.get<Book>(`${environment.apiBaseUrl}/api/Books/${id}`);
  }

}
