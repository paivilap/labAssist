import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotesAddPage } from './notes-add.page';

const routes: Routes = [
  {
    path: '',
    component: NotesAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotesAddPageRoutingModule {}
