import { Component, OnInit } from '@angular/core';
import {SharedService} from "../../shared/shared.service";

@Component({
  selector: 'app-my-group-page',
  templateUrl: './my-group-page.component.html',
  styleUrls: ['./my-group-page.component.scss']
})
export class MyGroupPageComponent implements OnInit {
  hasGroup: boolean;
  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    const userData = this.sharedService.fetchUserData();
    this.hasGroup = userData.groupID !== null;
  }

}
