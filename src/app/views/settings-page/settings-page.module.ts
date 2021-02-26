import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SettingsPageComponent} from "./settings-page.component";
import {SettingsPageHasGroupComponent} from "./settings-page-has-group/settings-page-has-group.component";
import {SettingsPageHasNoGroupComponent} from "./settings-page-has-no-group/settings-page-has-no-group.component";
import {SharedModule} from "../../shared/shared.module";



@NgModule({
  declarations: [
    SettingsPageComponent,
    SettingsPageHasGroupComponent,
    SettingsPageHasNoGroupComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
  ],
  exports: [
    SettingsPageComponent,
    SettingsPageHasGroupComponent,
    SettingsPageHasNoGroupComponent,
  ]
})
export class SettingsPageModule { }
