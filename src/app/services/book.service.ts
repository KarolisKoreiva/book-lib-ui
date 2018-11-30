import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Book } from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpClient: HttpClient) {}

  getBooks() {
    return this.httpClient.get<Book[]>(environment.apiUrl + '/books');
  }

  getBook(id: string) {
    return this.httpClient.get<Book>(environment.apiUrl + '/book/' + id);
  }

  saveBook(book: Book) {
    return this.httpClient.post<Book>(environment.apiUrl + '/book', book);
  }

  updateBook(book: Book) {
    return this.httpClient.put<Book>(environment.apiUrl + '/book', book);
  }

  deleteBook(book: Book) {
    return this.httpClient.delete<Book>(environment.apiUrl + '/book/' + book._id + '/' + book._rev);
  }
}
