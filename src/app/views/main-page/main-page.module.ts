import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainPageComponent} from "./main-page.component";
import {HasNoGroupComponent} from "./has-no-group/has-no-group.component";
import {HasGroupComponent} from "./has-group/has-group.component";
import {SharedModule} from "../../shared/shared.module";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    MainPageComponent,
    HasNoGroupComponent,
    HasGroupComponent,
  ],
  imports: [
    SharedModule,
    FormsModule,
    CommonModule,
    RouterModule,
  ],
  exports: [
    MainPageComponent,
    HasNoGroupComponent,
    HasGroupComponent,
  ]
})
export class MainPageModule { }
