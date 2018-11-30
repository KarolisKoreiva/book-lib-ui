import { Component, OnInit } from '@angular/core';
import { Book } from '../model/book';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {

  books: Book[];

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.bookService.getBooks().subscribe( (response: Book[]) => {
      this.books = response;
    });
  }

  onDelete(index: number) {
    const bookToDelete = this.books[index];
    console.log(bookToDelete);
    this.bookService.deleteBook(bookToDelete).subscribe( (response: any) => {
      console.log(response);
    });
    this.books.splice(index, 1);
  }

}
