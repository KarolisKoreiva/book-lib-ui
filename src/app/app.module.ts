import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { BookViewComponent } from './main/book-view/book-view.component';
import { BookService } from './services/book.service';
import { HolderjsDirective } from './holderjs.directive';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BookEditComponent } from './main/book-edit/book-edit.component';
import { BookAddComponent } from './main/book-add/book-add.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    BookViewComponent,
    HolderjsDirective,
    PageNotFoundComponent,
    BookEditComponent,
    BookAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    BookService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
