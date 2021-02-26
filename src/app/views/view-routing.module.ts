import { NgModule } from '@angular/core';
import {MainPageComponent} from "./main-page/main-page.component";
import {CreatePageComponent} from "./create-page/create-page.component";
import {JoinGroupComponent} from "./join-group/join-group.component";
import {SettingsPageComponent} from "./settings-page/settings-page.component";
import {MyGroupPageComponent} from "./my-group-page/my-group-page.component";
import {RouterModule} from "@angular/router";
import {AuthGuard} from "../auth/auth.guard";

const routes = [
  {path: '', component: MainPageComponent, canActivate: [AuthGuard]},
  {path: 'create', component: CreatePageComponent, canActivate: [AuthGuard]},
  {path: 'join', component: JoinGroupComponent, canActivate: [AuthGuard]},
  {path: 'settings', component: SettingsPageComponent, canActivate: [AuthGuard]},
  {path: 'group', component: MyGroupPageComponent, canActivate: [AuthGuard]},
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ViewRoutingModule { }
