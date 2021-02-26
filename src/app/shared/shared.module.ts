import { NgModule } from '@angular/core';
import {NavigationComponent} from "../navigation/navigation.component";
import {RouterModule} from "@angular/router";
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';



@NgModule({
  declarations: [
    NavigationComponent,
    LoadingSpinnerComponent,
  ],
  imports: [
    RouterModule,
  ],
  exports: [
    NavigationComponent,
    LoadingSpinnerComponent,
  ]
})
export class SharedModule { }
