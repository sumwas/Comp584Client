import { Book } from "../../books/models/book.model";

export interface AddReview {
    title: string, 
    content: string, 
    rating: string,
    publishedDate: Date;
    author: string; 
    bookId: string;
    
}