import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/model/book';
import { BookService } from 'src/app/services/book.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.css']
})
export class BookViewComponent implements OnInit {

  book: Book;

  constructor(private bookService: BookService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.bookService.getBook(id).subscribe( (response: Book) => {
      this.book = response;
    });
  }

}
