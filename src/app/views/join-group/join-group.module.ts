import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../../shared/shared.module";
import {JoinGroupComponent} from "./join-group.component";
import {JoinGroupHasNoGroupComponent} from "./join-group-has-no-group/join-group-has-no-group.component";
import {JoinGroupHasGroupComponent} from "./join-group-has-group/join-group-has-group.component";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    JoinGroupComponent,
    JoinGroupHasNoGroupComponent,
    JoinGroupHasGroupComponent,
  ],
  imports: [
    SharedModule,
    FormsModule,
    CommonModule,
    RouterModule,
  ],
  exports: [
    JoinGroupComponent,
    JoinGroupHasNoGroupComponent,
    JoinGroupHasGroupComponent,
  ]
})
export class JoinGroupModule { }
