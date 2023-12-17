import { Book } from "../../books/models/book.model";

export interface Review {
    id: string,
    title: string, 
    content: string, 
    rating: string,
    publishedDate: Date;
    author: string; 
    bookTitle: Book;
}