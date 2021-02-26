import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {CreatePageService} from "../create-page.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-create-page-has-no-group',
  templateUrl: './create-page-has-no-group.component.html',
  styleUrls: ['./create-page-has-no-group.component.scss']
})
export class CreatePageHasNoGroupComponent implements OnInit, OnDestroy {
  errorMessage: string = '';
  errorSub: Subscription;
  constructor(private createPageService: CreatePageService) { }

  ngOnInit(): void {
    this.errorSub = this.createPageService.errorMessage
      .subscribe(errorMsg => {
        this.errorMessage = errorMsg;
      });
  }

  ngOnDestroy(): void {
    this.errorSub.unsubscribe();
  }

  onSubmit(form: NgForm): void {
    this.createPageService.onCreateGroup(form);
  }
}
