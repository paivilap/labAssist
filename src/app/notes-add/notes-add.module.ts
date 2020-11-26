import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotesAddPageRoutingModule } from './notes-add-routing.module';

import { NotesAddPage } from './notes-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotesAddPageRoutingModule
  ],
  declarations: [NotesAddPage]
})
export class NotesAddPageModule {}
