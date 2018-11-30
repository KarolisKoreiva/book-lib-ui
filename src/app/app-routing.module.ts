import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BookViewComponent } from './main/book-view/book-view.component';
import { BookEditComponent } from './main/book-edit/book-edit.component';
import { BookAddComponent } from './main/book-add/book-add.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'bookadd',
    component: BookAddComponent
  },
  {
    path: 'bookview/:id',
    component: BookViewComponent
  },
  {
    path: 'bookedit/:id',
    component: BookEditComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
