import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {JoinGroupService} from "../join-group.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-join-group-has-no-group',
  templateUrl: './join-group-has-no-group.component.html',
  styleUrls: ['./join-group-has-no-group.component.scss']
})
export class JoinGroupHasNoGroupComponent implements OnInit, OnDestroy {
  errorMsg: string = '';
  errorSub: Subscription;

  constructor(private joinGroupService: JoinGroupService) { }

  ngOnInit(): void {
    this.errorSub = this.joinGroupService.errorMessage
      .subscribe(errorMsg => this.errorMsg = errorMsg);
  }

  ngOnDestroy(): void {
    this.errorSub.unsubscribe();
  }

  onSubmit(form: NgForm): void {
    this.joinGroupService.onJoin(form);
  }
}
