import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../../model/book';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {

  book: Book = new Book('', '', null, '', []);

  constructor(private router: Router,
              private bookService: BookService) { }

  ngOnInit() {
  }

  onAddBook() {
    this.bookService.saveBook(this.book).subscribe( (response: any) => {
      console.log(response);
      if (response.ok === true) {
        this.router.navigate(['']);
      } else {
        this.router.navigate(['/pagenotfound']);
      }
    });
  }

}
