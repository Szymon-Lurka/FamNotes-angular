import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CreatePageComponent} from "./create-page.component";
import {CreatePageHasNoGroupComponent} from "./create-page-has-no-group/create-page-has-no-group.component";
import {CreatePageHasGroupComponent} from "./create-page-has-group/create-page-has-group.component";
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../../shared/shared.module";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    CreatePageComponent,
    CreatePageHasNoGroupComponent,
    CreatePageHasGroupComponent,
  ],
  imports: [
    FormsModule,
    SharedModule,
    CommonModule,
    RouterModule,
  ],
  exports: [
    CreatePageComponent,
    CreatePageHasNoGroupComponent,
    CreatePageHasGroupComponent,
  ]
})
export class CreatePageModule { }
