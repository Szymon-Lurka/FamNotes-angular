import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {ViewRoutingModule} from "./view-routing.module";
import {BrowserModule} from "@angular/platform-browser";
import {NotesComponent} from "./my-group-page/my-group-has-group/notes/notes.component";
import {CreatePageModule} from "./create-page/create-page.module";
import {SharedModule} from "../shared/shared.module";
import {JoinGroupModule} from "./join-group/join-group.module";
import {MainPageModule} from "./main-page/main-page.module";
import {MyGroupModule} from "./my-group-page/my-group.module";
import {SettingsPageModule} from "./settings-page/settings-page.module";

@NgModule({
  declarations: [],
  imports: [
    FormsModule,
    ViewRoutingModule,
    BrowserModule,
    CreatePageModule,
    JoinGroupModule,
    MainPageModule,
    MyGroupModule,
    SettingsPageModule,
  ]
})
export class ViewModule { }
