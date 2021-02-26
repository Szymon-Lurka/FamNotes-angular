import { Component, OnInit } from '@angular/core';
import {SharedService} from "../../../shared/shared.service";

@Component({
  selector: 'app-my-group-has-group',
  templateUrl: './my-group-has-group.component.html',
  styleUrls: ['./my-group-has-group.component.scss']
})
export class MyGroupHasGroupComponent implements OnInit {
  groupName: string;
  groupTag: string;
  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    const userData = this.sharedService.fetchUserData();
    this.groupName = userData.groupTitle;
    this.groupTag = userData.groupTag;
  }

}
