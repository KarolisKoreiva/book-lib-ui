import { Component, OnInit } from '@angular/core';
import { Book } from '../../model/book';
import { BookService } from '../../services/book.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {

  book: Book;

  constructor(private bookService: BookService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.bookService.getBook(id).subscribe( (response: Book) => {
      this.book = response;
    });
  }

  onChangeBook() {
    this.bookService.updateBook(this.book).subscribe( (response: any) => {
      console.log(response);
      if (response.ok === true) {
        this.router.navigate(['']);
      } else {
        this.router.navigate(['/pagenotfound']);
      }
    });
  }

}
