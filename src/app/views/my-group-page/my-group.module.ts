import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MyGroupPageComponent} from "./my-group-page.component";
import {MyGroupHasNoGroupComponent} from "./my-group-has-no-group/my-group-has-no-group.component";
import {MyGroupHasGroupComponent} from "./my-group-has-group/my-group-has-group.component";
import {SharedModule} from "../../shared/shared.module";
import {FormsModule} from "@angular/forms";
import {NotesComponent} from "./my-group-has-group/notes/notes.component";
import {RouterModule} from "@angular/router";
import { CardComponent } from './my-group-has-group/notes/card/card.component';
import { AddModalComponent } from './my-group-has-group/notes/add-modal/add-modal.component';



@NgModule({
  declarations: [
    MyGroupPageComponent,
    MyGroupHasNoGroupComponent,
    MyGroupHasGroupComponent,
    NotesComponent,
    CardComponent,
    AddModalComponent,
  ],
  imports: [
    SharedModule,
    FormsModule,
    CommonModule,
    RouterModule,
  ], exports: [
    MyGroupPageComponent,
  ]
})
export class MyGroupModule { }
