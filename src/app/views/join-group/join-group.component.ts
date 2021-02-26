import { Component, OnInit } from '@angular/core';
import {SharedService} from "../../shared/shared.service";

@Component({
  selector: 'app-join-group',
  templateUrl: './join-group.component.html',
  styleUrls: ['./join-group.component.scss']
})
export class JoinGroupComponent implements OnInit {
  hasGroup: boolean;
  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    const userData = this.sharedService.fetchUserData();
    this.hasGroup = userData.groupID !== null;
  }

}
